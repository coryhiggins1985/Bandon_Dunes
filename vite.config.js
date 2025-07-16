import { defineConfig } from 'vite';

export default defineConfig({
  define: {
    __firebase_config: '{"apiKey":"demo-api-key","authDomain":"demo-project.firebaseapp.com","projectId":"demo-project","storageBucket":"demo-project.appspot.com","messagingSenderId":"123456789","appId":"1:123456789:web:abcdef123456"}',
    __app_id: JSON.stringify("bandon-dunes-golf-trip"),
    __initial_auth_token: JSON.stringify(null)
  }
});