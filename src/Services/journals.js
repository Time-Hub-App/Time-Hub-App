import { client, checkError } from './client';

export async function createJournal(title) {
    const resp = await client.from('journals').insert([{ title, user_id: client.auth.user().id }]);
    return checkError(resp);
}

export async function fetchJournals() {
    const resp = await client.from('journals').select('*');
    return checkError(resp);
}

export async function updateJournal({ id, title })