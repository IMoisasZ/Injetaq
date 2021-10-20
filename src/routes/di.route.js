import express from 'express'
import DiController from '../controllers/di.controller.js'

const router = express.Router()

router.post('/', DiController.criarDi)
router.put('/', DiController.alterarDi)
router.get('/:di', DiController.buscaDi)
router.get('/', DiController.buscaTodasDi)
router.get('/situacao/:situacao_id', DiController.buscaDiPorSituacao)
router.get('/tipo/:tipo_di_id', DiController.buscaDiPorTipo)

export default router