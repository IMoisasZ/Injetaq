import express from 'express'
import DiController from '../controllers/di.controller.js'

const router = express.Router()

router.post('/', DiController.criarDi)
router.put('/', DiController.alterarDi)
router.get('/:di', DiController.buscaDi)
router.get('/', DiController.buscaTodasDi)
router.get('/?situcao_id', DiController.buscaTodasDi)

export default router