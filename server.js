const express = require('express');
const fs = require('fs');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.text());
app.use(express.static('.'));

app.post('/salvar', (req, res) => {
  fs.writeFileSync('conteudo.txt', req.body);
  res.send('Salvo!');
});

app.get('/carregar', (req, res) => {
  let conteudo = '';
  if (fs.existsSync('conteudo.txt')) {
    conteudo = fs.readFileSync('conteudo.txt', 'utf-8');
  }
  res.send(conteudo);
});

app.listen(PORT, () => {
  console.log('Servidor rodando na porta ' + PORT);
});
