import UsuarioModel from '../modules/usuario.model.js'

async function criarUsuario(usuario){
    try {
        let usuarioCriado = await UsuarioModel.create(usuario)
        return await buscarUsuario(usuarioCriado.usuario_id)
    } catch (error) {
        throw error
    }
}

async function alterarUsuario(usuario){
    try {
        await UsuarioModel.update(usuario, {
            where:{
                usuario_id: usuario.usuario_id
            }
        })
        return await buscarUsuario(usuario.usuario_id)
    } catch (error) {
        throw error
    }
}

async function buscarUsuario(usuario_id){
    try {
        let usuario = await UsuarioModel.findByPk(usuario_id)
        usuario.senha = undefined
        return await usuario
    } catch (error) {
        throw error
    }
}

async function buscarUsuarios(){
    try {
        let usuarios = await UsuarioModel.findAll()
        usuarios.map((user) => user.senha = undefined)
        return await usuarios
    } catch (error) {
        throw error
    }
}

async function alterarStatusUsuario(usuario_id, ativo){
    try {
        await UsuarioModel.update({
            ativo
        },
        {
            where:{
                usuario_id
            }
        })
        return await buscarUsuario(usuario_id)
    } catch (error) {
        throw error
    }
}

export default {
    criarUsuario,
    alterarUsuario,
    buscarUsuario,
    buscarUsuarios,
    alterarStatusUsuario
}