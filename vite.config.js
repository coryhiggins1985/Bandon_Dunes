import { defineConfig } from 'vite';

export default defineConfig({
  define: {
    __firebase_config: JSON.stringify({
      "apiKey": "AIzaSyA6Cvu465iSSyQGwjKAcFwvG4mmZ877SrY",
      "authDomain": "bandon-dunes-640e8.firebaseapp.com",
      "projectId": "bandon-dunes-640e8",
      "storageBucket": "bandon-dunes-640e8.firebasestorage.app",
      "messagingSenderId": "250064099756",
      "appId": "1:250064099756:web:974a8f1f10f3830ff50209"
    }),
    __app_id: JSON.stringify("bandon-dunes-golf-trip"),
    __initial_auth_token: JSON.stringify(null)
  }
});