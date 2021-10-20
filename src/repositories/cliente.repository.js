import ClienteModule from '../modules/cliente.model.js'

async function criarCliente(cliente){
    try {
        let clienteCadastrado = await ClienteModule.create(cliente)
        return await buscarCliente(clienteCadastrado.cliente_id)
    } catch (error) {
        throw error
    }
}

async function alterarCliente(cliente){
    try {
        await ClienteModule.update(cliente, {
            where: {
                cliente_id: cliente.cliente_id
            }
        })
        return await buscarCliente(cliente.cliente_id)
    } catch (error) {
        throw error
    }
}

async function buscarCliente(cliente_id){
    try {
        return await ClienteModule.findByPk(cliente_id)
    } catch (error) {
        throw error
    }
}

async function buscarClientes(){
    try {
        return await ClienteModule.findAll()
    } catch (error) {
        throw error
    }
}

async function desativarCliente(cliente_id, ativo){
    try {
        await ClienteModule.update({
            ativo
        },
        {
            where:
                {
                    cliente_id
                }
        })
    } catch (error) {
        throw error
    }
    return await buscarCliente(cliente_id)
}

export default {
    criarCliente,
    alterarCliente,
    buscarCliente,
    buscarClientes,
    desativarCliente
}