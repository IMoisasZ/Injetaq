import UsuarioRepository from '../repositories/usuario.repository.js'
import bcrypt from 'bcrypt'

async function criarUsuario(usuario){
    try {
        if(usuario.senha.length < 6){
            throw new Error("A senha deve ter no minimo 6 caracteres!")
        }

        let senhaCrypt = bcrypt.hashSync(usuario.senha, 10);
        
        if(!bcrypt.compareSync(usuario.confirmar_senha, senhaCrypt)){
            throw new Error("Senhas não conferem!");
        }

        usuario.nome = usuario.nome.toUpperCase()
        usuario.email = usuario.email.toLowerCase()
        usuario.senha = senhaCrypt;
        usuario.confirmar_senha = undefined;
        return await UsuarioRepository.criarUsuario(usuario)
    } catch (error) {
        throw error
    }
}

async function alterarUsuario(usuario){
    try {
        if(usuario.senha.length < 6){
            throw new Error("A senha deve ter no minimo 6 caracteres!")
        }

        let senhaCrypt = bcrypt.hashSync(usuario.senha, 10);
        
        if(!bcrypt.compareSync(usuario.confirmar_senha, senhaCrypt)){
            throw new Error("Senhas não conferem!");
        }
        usuario.nome = usuario.nome.toUpperCase()
        usuario.email = usuario.email.toLowerCase()
        usuario.senha = senhaCrypt;
        usuario.confirmar_senha = undefined;
        return await UsuarioRepository.alterarUsuario(usuario)
    } catch (error) {
        throw error
    }
}

async function buscarUsuario(usuario_id){
    return await UsuarioRepository.buscarUsuario(usuario_id)
}

async function buscarUsuarios(){
    return await UsuarioRepository.buscarUsuarios()
}

async function alterarStatusUsuario(usuario_id, ativo){
    try {
        if(ativo || !ativo){
            return await UsuarioRepository.alterarStatusUsuario(usuario_id, ativo)
        }
        throw new Error('Ativo deve ser "true" ou "false"')
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