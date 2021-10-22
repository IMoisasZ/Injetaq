import express from 'express'
import DiSetorController from '../controllers/diSetor.controller.js'

const router = express.Router()

router.post('/', DiSetorController.criarDiSetor)
router.put('/', DiSetorController.alterarDiSetor)
router.get('/:di_setor_id', DiSetorController.buscaDiSetor)
router.delete('/:di_setor_id', DiSetorController.deleteDiSetor)

export default router