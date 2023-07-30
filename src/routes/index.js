const express = require('express');
const routerTestimony = require('./testimony.router');
const router = express.Router();

// colocar las rutas aquí
router.use('/testimonies', routerTestimony)


module.exports = router;