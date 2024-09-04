module.exports = {
    apps: [
      {
        name: "server",
        script: "index.js",
        env: {
          NODE_ENV: 'development',
          PORT: 3000,
        },
        env_production: {
          NODE_ENV: "production",
          PORT: 5000, // Change this to your desired production port
        },
      },
    ],
  };
 