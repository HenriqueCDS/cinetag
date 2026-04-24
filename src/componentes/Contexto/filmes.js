import { createContext, useContext, useState, useEffect } from "react";
import { getFilmes, postFilme, putFilme, deleteFilme } from "servicos/filmes";
import dadosEstaticos from "json/db.json";

export const FilmesContext = createContext();
FilmesContext.displayName = "Filmes";

export default function FilmesProvider({ children }) {
    const [filmes, setFilmes] = useState([]);
    const [carregando, setCarregando] = useState(true);
    const [somenteLeitura, setSomenteLeitura] = useState(false);

    useEffect(() => {
        getFilmes()
            .then(dados => {
                setFilmes(dados);
                setSomenteLeitura(false);
            })
            .catch(() => {
                setFilmes(dadosEstaticos.filmes);
                setSomenteLeitura(true);
            })
            .finally(() => setCarregando(false));
    }, []);

    async function adicionarFilme(novoFilme) {
        const criado = await postFilme(novoFilme);
        setFilmes(prev => [...prev, criado]);
        return criado;
    }

    async function editarFilme(id, dados) {
        const atualizado = await putFilme(id, { id, ...dados });
        setFilmes(prev => prev.map(f => f.id === id ? atualizado : f));
        return atualizado;
    }

    async function removerFilme(id) {
        await deleteFilme(id);
        setFilmes(prev => prev.filter(f => f.id !== id));
    }

    return (
        <FilmesContext.Provider value={{ filmes, carregando, somenteLeitura, adicionarFilme, editarFilme, removerFilme }}>
            {children}
        </FilmesContext.Provider>
    );
}

export function useFilmesContext() {
    return useContext(FilmesContext);
}
