module.exports = {
  apps: [
    {
      name: "nextjs-dev", // Name of the PM2 app
      script: "node_modules/next/dist/bin/next", // Path to the Next.js CLI
      args: "dev -p 3001", // Arguments to run in dev mode (optional custom port)
      instances: 1, // Development mode does not support clustering
      watch: true, // Restart on file changes (optional)
      env: {
        NODE_ENV: "development", // Set environment to development
      },
    },
  ],
};
