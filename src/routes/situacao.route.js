import express from 'express'
import SituacaoController from '../controllers/situacao.controller.js'

const router = express.Router()

router.post('/', SituacaoController.criarSituacao)
router.put('/', SituacaoController.alterarSituacao)
router.get('/:situacao_id', SituacaoController.buscarSituacao)
router.get('/', SituacaoController.buscarSituacoes)
router.put('/alterar-status-situacao', SituacaoController.alterarStatusSituacao)

export default router