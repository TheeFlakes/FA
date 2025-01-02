import { defineConfig } from 'vite';

export default defineConfig({
  root: './', // Ensure this points to the directory with index.html
  server: {
    port: 3000, // Specify the port number
    host: '0.0.0.0', // Allow access from network
    open: true, // Automatically open the app in the browser
    proxy: {
      '/api': {
        target: 'http://localhost:5000',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  },
  build: {
    outDir: 'dist', // Output directory
    rollupOptions: {
      input: 'app.html', // specify your entry file here
    },
  },
  // Add any other Vite configurations you need here
});
