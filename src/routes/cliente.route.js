import express from 'express'
import clienteController from '../controllers/cliente.controller.js'
import ClienteController from '../controllers/cliente.controller.js'

const router = express.Router()

router.post('/', ClienteController.criarCliente)
router.put('/desativar', clienteController.desativarCliente)
router.put('/', ClienteController.alterarCliente)
router.get('/:cliente_id', ClienteController.buscarCliente)
router.get('/', ClienteController.buscarClientes)

export default router