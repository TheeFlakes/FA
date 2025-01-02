import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    rollupOptions: {
      input: 'src/app.html', // Path to your entry HTML file
    },
  },
  server: {
    port: 3000, // Specify the port number for the dev server
    host: '0.0.0.0', // Allow access from network
    open: true, // Automatically open the app in the browser
  },
  // Add any other Vite configurations you need here
});
