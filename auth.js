// auth.js
const pb = new PocketBase('https://2cbd1d29426f.ngrok-free.app');

// Optional: Check if already logged in
if (pb.authStore.isValid) {
  console.log("User is logged in:", pb.authStore.model);
} else {
  console.log("No user is logged in.");
}
