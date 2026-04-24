const API = 'http://localhost:3001';

export async function getFilmes() {
    const res = await fetch(`${API}/filmes`);
    if (!res.ok) throw new Error('Falha ao carregar filmes');
    return res.json();
}

export async function postFilme(filme) {
    const res = await fetch(`${API}/filmes`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(filme),
    });
    if (!res.ok) throw new Error('Falha ao adicionar filme');
    return res.json();
}

export async function putFilme(id, filme) {
    const res = await fetch(`${API}/filmes/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(filme),
    });
    if (!res.ok) throw new Error('Falha ao atualizar filme');
    return res.json();
}

export async function deleteFilme(id) {
    const res = await fetch(`${API}/filmes/${id}`, { method: 'DELETE' });
    if (!res.ok) throw new Error('Falha ao deletar filme');
}
