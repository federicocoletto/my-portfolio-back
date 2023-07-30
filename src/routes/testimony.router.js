const { getAll, create, getOne, remove, update } = require('../controllers/testimony.controller');
const express = require('express');

const routerTestimony = express.Router();

routerTestimony.route('/')
	.get(getAll)
	.post(create);

routerTestimony.route('/:id')
	.get(getOne)
	.delete(remove)
	.put(update);

module.exports = routerTestimony;