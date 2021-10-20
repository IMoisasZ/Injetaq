import UsuarioService from '../services/usuario.service.js'

async function criarUsuario(req, res, next){
    try {
        let usuario = req.body
        if(!usuario.nome || !usuario.email || !usuario.senha || !usuario.setor_id){
            throw new Error('O nome do usuário, email, senha e ID do setor são obrigatórios!')
        }
        res.send(await UsuarioService.criarUsuario(usuario))
        logger.info(`POST /usuario - ${JSON.stringify(usuario)}`)
    } catch (error) {
        next(error)
    }
}

async function alterarUsuario(req, res, next){
    try {
        let usuario = req.body
        if(!usuario.nome || !usuario.email || !usuario.senha || !usuario.setor_id){
            throw new Error('O nome do usuário, email, senha e ID do setor são obrigatórios!')
        }
        res.send(await UsuarioService.alterarUsuario(usuario))
        logger.info(`PUT /usuario - ${JSON.stringify(usuario)}`)
    } catch (error) {
        next(error)
    }
}

async function buscarUsuario(req, res, next){
    try {
        res.send(await UsuarioService.buscarUsuario(req.params.usuario_id))
        logger.info(`GET /usuario/:usuario_id - ${req.param.usuario_id}`)
    } catch (error) {
        next(error)
    }
}

async function buscarUsuarios(req, res, next){
    try {
        res.send(await UsuarioService.buscarUsuarios())
        logger.info(`GET /usuario`)
    } catch (error) {
        next(error)
    }
}

async function alterarStatusUsuario(req, res, next){
    try {
        let {usuario_id, ativo} = req.body
        if(!usuario_id || ativo.length === 0){
            throw new Error('O ID do usuário e ativo são obrigatórios!')
        }
        res.send(await UsuarioService.alterarStatusUsuario(usuario_id, ativo))
        logger.info(`PUT /situacao/alterar-status-usuario - ${usuario_id} - ${ativo}`)
    } catch (error) {
        next(error)
    }
}

export default {
    criarUsuario,
    alterarUsuario,
    buscarUsuario,
    buscarUsuarios,
    alterarStatusUsuario
}