const app = require('./src/app');

//init server running
const port = 8080;
const server = app.listen(port, () => {
  console.log(`Sever is running at http://localhost:${port}`);
});

process.on('SIGINT', () => {
  server.close(() => console.log(`\n Exit Sever Express`));
});
