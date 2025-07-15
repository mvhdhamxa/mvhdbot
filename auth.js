// auth.js

import PocketBase from 'https://cdn.jsdelivr.net/npm/pocketbase@0.18.3/+esm';

// Replace with your actual local IP if using from another device
const PB_URL = 'http://127.0.0.1:8090';  // or 'http://192.168.x.x:8090'
const pb = new PocketBase(PB_URL);

// Login function
export async function login(email, password) {
  try {
    const authData = await pb.collection('users').authWithPassword(email, password);
    console.log('Logged in:', authData);
    return authData;
  } catch (error) {
    console.error('Login failed:', error);
    throw error;
  }
}

// Signup function
export async function signup(email, password) {
  try {
    const userData = await pb.collection('users').create({
      email,
      password,
      passwordConfirm: password,
    });
    console.log('User registered:', userData);
    return userData;
  } catch (error) {
    console.error('Signup failed:', error);
    throw error;
  }
}
