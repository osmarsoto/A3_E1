
// server.js
const http = require('http');
const app = require('./app');

http.createServer(app).listen(8001, () => {
    console.log("Servidor rodando em: http://localhost:8001");
});

// app.js
const express = require('express');
const app = express();

const produtoRoutes = require('./routes/produtoRoutes');
const clienteRoutes = require('./routes/clienteRoutes');

app.use(express.json());

app.get('/', (req, res) => {
    res.status(200).send("Bem-vindo à nossa API REST");
});

app.use('/produtos', produtoRoutes);
app.use('/clientes', clienteRoutes);

module.exports = app;

// routes/produtoRoutes.js
const express = require('express');
const router = express.Router();
const produtoController = require('../controllers/produtoController');

router.get('/', produtoController.getAll);
router.post('/', produtoController.create);

module.exports = router;

// routes/clienteRoutes.js
const express = require('express');
const router = express.Router();
const clienteController = require('../controllers/clienteController');

router.get('/', clienteController.getAll);
router.post('/', clienteController.create);

module.exports = router;

// controllers/produtoController.js
const produtoService = require('../services/produtoService');

exports.getAll = (req, res) => {
    const produtos = produtoService.getAll();
    res.status(200).json(produtos);
};

exports.create = (req, res) => {
    const novoProduto = produtoService.create(req.body);
    res.status(201).json(novoProduto);
};

// controllers/clienteController.js
const clienteService = require('../services/clienteService');

exports.getAll = (req, res) => {
    const clientes = clienteService.getAll();
    res.status(200).json(clientes);
};

exports.create = (req, res) => {
    const novoCliente = clienteService.create(req.body);
    res.status(201).json(novoCliente);
};

// services/produtoService.js
const produtoRepository = require('../repositories/produtoRepository');

exports.getAll = () => {
    return produtoRepository.getAll();
};

exports.create = (produto) => {
    return produtoRepository.create(produto);
};

// services/clienteService.js
const clienteRepository = require('../repositories/clienteRepository');

exports.getAll = () => {
    return clienteRepository.getAll();
};

exports.create = (cliente) => {
    return clienteRepository.create(cliente);
};

// repositories/produtoRepository.js
let produtos = [];

exports.getAll = () => {
    return produtos;
};

exports.create = (produto) => {
    produto.id = produtos.length + 1;
    produtos.push(produto);
    return produto;
};

// repositories/clienteRepository.js
let clientes = [];

exports.getAll = () => {
    return clientes;
};

exports.create = (cliente) => {
    cliente.id = clientes.length + 1;
    clientes.push(cliente);
    return cliente;
};
