import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Banner from '../../componentes/Banner';
import Titulo from '../../componentes/Titulo';
import { useFilmesContext } from '../../componentes/Contexto/filmes';
import styles from './AdicionarFilme.module.css';

function converterLinkYoutube(url) {
    if (!url) return '';
    if (url.includes('youtube.com/embed/')) return url;
    const match = url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/)([a-zA-Z0-9_-]{11})/);
    if (match) return `https://www.youtube.com/embed/${match[1]}`;
    return url;
}

export default function AdicionarFilme() {
    const { adicionarFilme } = useFilmesContext();
    const navigate = useNavigate();
    const [form, setForm] = useState({ titulo: '', capa: '', link: '' });
    const [sucesso, setSucesso] = useState(false);
    const [erro, setErro] = useState('');
    const [salvando, setSalvando] = useState(false);

    function handleChange(e) {
        const { name, value } = e.target;
        setForm(prev => ({ ...prev, [name]: value }));
        if (erro) setErro('');
    }

    async function handleSubmit(e) {
        e.preventDefault();
        if (!form.titulo.trim() || !form.capa.trim() || !form.link.trim()) {
            setErro('Preencha todos os campos obrigatórios.');
            return;
        }
        setSalvando(true);
        try {
            await adicionarFilme({
                titulo: form.titulo.trim(),
                capa: form.capa.trim(),
                link: converterLinkYoutube(form.link.trim()),
            });
            setSucesso(true);
            setTimeout(() => navigate('/'), 2000);
        } catch {
            setErro('Erro ao salvar. Verifique se o servidor está rodando.');
        } finally {
            setSalvando(false);
        }
    }

    return (
        <>
            <Banner imagem="home" />
            <Titulo><h1>Adicionar Novo Filme</h1></Titulo>
            <section className={styles.container}>
                {sucesso ? (
                    <div className={styles.sucesso}>
                        <span>✓</span>
                        <p>Filme adicionado com sucesso!</p>
                        <small>Redirecionando para a página inicial...</small>
                    </div>
                ) : (
                    <form className={styles.form} onSubmit={handleSubmit} noValidate>
                        {erro && <p className={styles.erro}>{erro}</p>}

                        <div className={styles.campo}>
                            <label htmlFor="titulo">Título do Filme *</label>
                            <input
                                id="titulo"
                                name="titulo"
                                type="text"
                                value={form.titulo}
                                onChange={handleChange}
                                placeholder="Ex: Interestelar"
                                autoComplete="off"
                            />
                        </div>

                        <div className={styles.campo}>
                            <label htmlFor="capa">URL da Capa *</label>
                            <input
                                id="capa"
                                name="capa"
                                type="url"
                                value={form.capa}
                                onChange={handleChange}
                                placeholder="https://exemplo.com/imagem.jpg"
                            />
                            {form.capa && (
                                <div className={styles.preview}>
                                    <img
                                        src={form.capa}
                                        alt="Preview da capa"
                                        onError={e => { e.target.style.display = 'none'; }}
                                        onLoad={e => { e.target.style.display = 'block'; }}
                                    />
                                </div>
                            )}
                        </div>

                        <div className={styles.campo}>
                            <label htmlFor="link">Link do YouTube *</label>
                            <input
                                id="link"
                                name="link"
                                type="url"
                                value={form.link}
                                onChange={handleChange}
                                placeholder="https://youtube.com/watch?v=..."
                            />
                            <small>Aceita links normais ou de incorporação (embed)</small>
                        </div>

                        <button type="submit" className={styles.botao} disabled={salvando}>
                            {salvando ? 'Salvando...' : 'Adicionar Filme'}
                        </button>
                    </form>
                )}
            </section>
        </>
    );
}
