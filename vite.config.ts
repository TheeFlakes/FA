export default {
  server: {
    host: '0.0.0.0',
    port: process.env.PORT || 3000,
  },
  root: './', // Ensure this points to the directory with index.html
  build: {
    outDir: 'dist', // Output directory
  },
};
