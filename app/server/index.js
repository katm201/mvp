import app from './app';

const PORT = process.env.PORT || 8080;

app.listen(PORT);
console.log(`Listening at http://localhost:${PORT}`);
