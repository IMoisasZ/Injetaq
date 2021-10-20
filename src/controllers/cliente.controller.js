import ClienteService from '../services/cliente.service.js'

async function criarCliente(req, res, next) {
    try {
        let cliente = req. body
        if(!cliente.nome){
            throw new Error("Nome do cliente é obrigatório!")
        }
        res.send(await ClienteService.criarCliente(cliente))
        logger.info(`POST /cliente ${JSON.stringify(cliente)}`)
    } catch (error) {
        next(error)
    }
}

async function alterarCliente(req, res, next){
    try {
        let cliente = req.body
        if(!cliente.nome){
            throw new Error('Nome do cliente é obrigatório!')
        }
        res.send(await ClienteService.alterarCliente(cliente))
        logger.info(`PUT /cliente ${JSON.stringify(cliente)}`)
    } catch (error) {
        next(error)
    }
}

async function buscarCliente(req, res, next){
    try {
        res.send(await ClienteService.buscarCliente(req.params.cliente_id))
        logger.info(`GET /cliente/:cliente_id ${JSON.stringify(req.params.cliente_id)}`)
    } catch (error) {
        next(error)
    }
}

async function buscarClientes(req, res, next){
    try {
        res.send(await ClienteService.buscarClientes())
        logger.info(`GET /cliente`)
    } catch (error) {
        next(error)
    }
}

async function desativarCliente(req, res, next){
    try {
        let {ativo, cliente_id} = req.body
        if(ativo.length === 0 || !cliente_id){
            throw new Error("O Cliente ID e Ativo são obrigatórios!")
        }
        res.send(await ClienteService.desativarCliente(cliente_id, ativo))
        logger.info(`/PUT - ${cliente_id} - ${ativo})}`)
    } catch (error) {
        next(error)
    }
}

export default {
    criarCliente,
    alterarCliente,
    buscarCliente,
    buscarClientes,
    desativarCliente
}