import ClienteRepository from '../repositories/cliente.repository.js'

async function criarCliente(cliente) {
    cliente.nome = cliente.nome.toUpperCase()
    return await ClienteRepository.criarCliente(cliente)
}

async function alterarCliente(cliente){
    cliente.nome = cliente.nome.toUpperCase()
    return await ClienteRepository.alterarCliente(cliente)
}

async function buscarCliente(cliente_id){
    return await ClienteRepository.buscarCliente(cliente_id)
}

async function buscarClientes(){
    return await ClienteRepository.buscarClientes()
}

async function desativarCliente(cliente_id, ativo){
    try {
        if(ativo === true || ativo === false){
            return await ClienteRepository.desativarCliente(cliente_id, ativo)
        }
        throw new Error('O status deve ser "true" ou "false"')
    } catch (error) {
        throw error
    }
}

export default {
    criarCliente,
    alterarCliente,
    buscarCliente,
    buscarClientes,
    desativarCliente
}