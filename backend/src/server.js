require('dotenv').config();
const app = require('./app');

const port = process.env.API_PORT || 3001;

const db = require('./models/db')

app.get('/', (_request, response) => {
  response.send();
});

app.listen(port, () => console.log('Servidor iniciado na porta', port));
