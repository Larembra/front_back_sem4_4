const express = require('express');
const { nanoid } = require('nanoid');
const cors = require('cors');

const app = express();
const port = 3000;

app.use(cors({ origin: 'http://localhost:3001' }));
app.use(express.json());

let products = [
    {
        id: nanoid(6),
        name: 'AI Server',
        category: 'GPU',
        description: 'эконом',
        price: 999,
        stock: 3
    },
    {
        id: nanoid(6),
        name: 'AI Server',
        category: 'GPU',
        description: 'дорогой',
        price: 9999999,
        stock: 2
    },
    {
        id: nanoid(6),
        name: 'a',
        category: 'b',
        description: 'c',
        price: 4,
        stock: 5
    },
    {
        id: nanoid(6),
        name: 'd',
        category: 'e',
        description: 'f',
        price: 4,
        stock: 5
    },
    {
        id: nanoid(6),
        name: 'g',
        category: 'h',
        description: 'i',
        price: 4,
        stock: 5
    },
    {
        id: nanoid(6),
        name: 'j',
        category: 'k',
        description: 'l',
        price: 4,
        stock: 5
    },
    {
        id: nanoid(6),
        name: 'o',
        category: 'l',
        description: 'm',
        price: 4,
        stock: 5
    },
    {
        id: nanoid(6),
        name: 'o',
        category: 'p',
        description: 'q',
        price: 4,
        stock: 5
    },
    {
        id: nanoid(6),
        name: 'r',
        category: 's',
        description: 't',
        price: 4,
        stock: 5
    },
    {
        id: nanoid(6),
        name: 'y',
        category: 'v',
        description: 'w',
        price: 4,
        stock: 5
    }
];

app.get('/api/products', (req, res) => res.json(products));

app.get('/api/products/:id', (req, res) => {
    const product = products.find(p => p.id === req.params.id);
    product ? res.json(product) : res.status(404).json({ error: 'Not found' });
});

app.post('/api/products', (req, res) => {
    const newProduct = { id: nanoid(6), ...req.body };
    products.push(newProduct);
    res.status(201).json(newProduct);
});

app.patch('/api/products/:id', (req, res) => {
    const product = products.find(p => p.id === req.params.id);
    if (!product) return res.status(404).json({ error: 'Not found' });
    Object.assign(product, req.body);
    res.json(product);
});

app.delete('/api/products/:id', (req, res) => {
    products = products.filter(p => p.id !== req.params.id);
    res.status(204).send();
});

app.listen(port, () => {
    console.log(`Сервер запущен на http://localhost:${port}`);
});

app.use((req, res, next) => {
    console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
    next();
});