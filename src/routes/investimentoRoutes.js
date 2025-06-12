const express = require('express');
const router = express.Router();
const investimentoController = require('../controllers/investimentoController');

//Rota para função de busca
router.get('/', investimentoController.getAllInvestimentos)

//Rota para função de criar
router.post('/', investimentoController.createInvestimento)

//Rota para função de editar
router.put('/:id', investimentoController.updateInvestimento)

//Rota para função de delete
router.delete('/:id', investimentoController.deleteInvestimento)

module.exports = router