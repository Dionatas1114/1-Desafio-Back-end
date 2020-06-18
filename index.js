const express = require('express');

const server = express();

server.use(express.json());

const list = [];

server.get('/', (req, res) => {
    return res.json({
        result: 'Bem vindo à área de cadastramento'
    });
});

server.post('/user', (req, res) => {
    const nome = req.body.nome;
    const email = req.body.email;
    const idade = req.body.idade;
    const telefone = req.body.telefone;

    const user = {
        nome,
        email,
        idade,
        telefone
    };

    list.push(user);

    return res.json(user);
});

server.get('/list', (req, res) => {
    return res.json({ list });
});

server.put('/update', (req, res) => {
    const nome = req.body.nome;
    const email = req.body.email;
    const idade = req.body.idade;
    const telefone = req.body.telefone;

    return res.json({
        result: 'Dados atualizados com sucesso!'
    });
});

server.listen(4000);