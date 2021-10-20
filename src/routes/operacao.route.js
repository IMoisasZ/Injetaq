import express from 'express'
import OperacaoController from '../controllers/operacao.controller.js'

const router = express.Router()

router.post('/', OperacaoController.criarOperacao)
router.put('/', OperacaoController.alterarOperacao)
router.get('/:operacao_id', OperacaoController.buscaOperacao)
router.get('/', OperacaoController.buscaOperacoes)
router.put('/alterar-status-operacao', OperacaoController.alterarStatusOperacao)

export default router