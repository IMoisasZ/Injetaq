import express from 'express'
import UsuarioController from '../controllers/usuario.controller.js'

const router = express.Router()

router.post('/', UsuarioController.criarUsuario)
router.put('/', UsuarioController.alterarUsuario)
router.get('/:usuario_id', UsuarioController.buscarUsuario)
router.get('/', UsuarioController.buscarUsuarios)
router.put('/alterar-status-usuario', UsuarioController.alterarStatusUsuario)

export default router