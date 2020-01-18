const express = require('express');
const postsRouter = require('./postsRouter.js');
const cors = require('cors');

const server = express();

server.use(express.json());
server.use(cors());
server.use('/api/posts', postsRouter);

server.get('/', (req, res) => {
	res.send('hello from node.js server.js file');
});

module.exports = server;
