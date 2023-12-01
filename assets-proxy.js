const express = require('express');
const request = require('request');
const app = express();
const PORT = 5555; // Porta em que o servidor Node.js irá rodar

app.get('*', (req, res) => {
    const bucketUrl = 'https://storage.googleapis.com/go2assets' + req.url;
    console.log(`Requisitando ${bucketUrl}`);
    request(bucketUrl).pipe(res);
});

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
