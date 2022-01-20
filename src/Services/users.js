import { client, checkError } from './client.js';

export function getUser() {
  return client.auth.session();
}

export async function signUpUser(email, username, password) {
  const { user, error } = await client.auth.signUp({ email, username, password });
  if (error) {
    throw error;
  }
  // const resp = await client.from('profiles').insert({ username }).single();
  // if (resp.error) {
  //   throw error;
  // }
  return user;
}

export async function signInUser(email, password) {
  const { user, error } = await client.auth.signIn({ email, password });
  if (error) {
    throw error;
  }
  return user;
}

export async function logout() {
  const response = await client.auth.signOut();
  return checkError(response);
}
