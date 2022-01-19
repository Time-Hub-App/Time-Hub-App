import { client, checkError } from './client';

export async function createEntry(text, emotion) {
  const resp = await client.from('entries').insert([{ text, emotion, user_id: client.auth.user().id }]);
  return checkError(resp);
}

export async function fetchEntries() {
  const resp = await client.from('entries').select('*');
  return checkError(resp);
}
