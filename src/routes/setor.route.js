import express from "express"
import SetorController from '../controllers/setor.controller.js'

const router = express.Router()

router.post('/', SetorController.criarSetor)
router.put('/', SetorController.alterarSetor)
router.get('/:setor_id', SetorController.buscarSetor)
router.get('/', SetorController.buscarSetores)
router.put('/desativar', SetorController.desativarSetor)

export default router