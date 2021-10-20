import express from 'express'
import TipoDiController from '../controllers/tipoDi.controller.js'

const router = express.Router()

router.post('/', TipoDiController.criarTipoDi)
router.put('/', TipoDiController.alterarTipoDi)
router.get('/:tipo_di_id', TipoDiController.buscarTipoDi)
router.get('/', TipoDiController.buscaTiposDi)
router.put('/alterar-status-tipo_di', TipoDiController.alterarStatusTipoDi)

export default router