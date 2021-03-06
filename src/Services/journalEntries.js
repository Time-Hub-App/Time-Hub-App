import { client, checkError } from './client';

export async function createEntry(text, emotion, journal_id) {
  const resp = await client.from('entries').insert([{ text, emotion, journal_id }]);
  return checkError(resp);
}

export async function fetchJournalId(title) {
  const resp = await client.from('journals').select('id').match({ title }).single();
  return checkError(resp);
}

export async function fetchEntries(journal_id) {
  const resp = await client.from('entries').select('*').match({ journal_id });
  return checkError(resp);
}

export async function deleteEntry(id) {
  const resp = await client.from('entries').delete().match({ id });
  return checkError(resp);
}

export async function updateEntry(id, emotion, text) {
  const resp = await client.from('entries').update({ emotion, text }).eq('id', id);
  return checkError(resp);
}
