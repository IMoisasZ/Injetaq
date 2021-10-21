import DiService from '../services/di.service.js'

async function criarDi(req, res, next){
    try {
        let dadosDi = req.body
        if(!dadosDi.di || !dadosDi.numero_pedido || !dadosDi.descricao || !dadosDi.cliente_id || !dadosDi.inicio || !dadosDi.prazo || !dadosDi.tipo_di_id || !dadosDi.situacao_id){
            throw new Error('DI, numero do pedido, descrição, ID do cliente, inicio, prazo, ID tipo da DI e ID da situação, são obrigatórios!')
        }
        res.send(await DiService.criarDi(dadosDi))
        logger.info(`POST /di - ${JSON.stringify(dadosDi)}`)
    } catch (error) {
        next(error)
    }
}

async function alterarDi(req, res, next){
    try {
        let dadosDi = req.body
        if(!dadosDi.di || !dadosDi.numero_pedido || !dadosDi.descricao || !dadosDi.cliente_id || !dadosDi.inicio || !dadosDi.prazo || !dadosDi.tipo_di_id || !dadosDi.situacao_id){
            throw new Error('DI, numero do pedido, descrição, ID do cliente, inicio, prazo, ID tipo da DI e ID da situação, são obrigatórios!')
        }
        res.send(await DiService.alterarDi(dadosDi))
        logger.info(`PUT /di - ${JSON.stringify(dadosDi)}`)
    } catch (error) {
        next(error)
    }
}

async function buscaDi(req, res, next){
    try {
        res.send(await DiService.buscaDi(req.params.di))
        logger.info(`GET /di/:di - ${req.params.di}`)
    } catch (error) {
        next(error)
    }
}

async function buscaTodasDi(req, res, next){
    try {
        res.send(await DiService.buscaTodasDi())
        logger.info(`GET /di`)
    } catch (error) {
        next(error)
    }
}

async function buscaDiPorSituacao(req, res, next){
    try {
        res.send(await DiService.buscaDiPorSituacao(req.params.situacao_id))
        logger.info(`GET /di/:situcao_id - ${req.params.situacao_id}`)
    } catch (error) {
        next(error)
    }
}

async function buscaDiPorTipo(req, res, next){
    try {
        res.send(await DiService.buscaDiPorTipo(req.params.tipo_di_id))
        logger.info(`GET /di/:tipo_di_id - ${req.params.tipo_di_id}`)
    } catch (error) {
        next(error)
    }
}

async function copiaDi(req, res, next){
    try {
        let {di_copia, nova_di} = req.body
        if(!di_copia || !nova_di){
            throw new Error('A DI a ser copia da e a nova DI são obrigatórias!')
        }
        res.send(await DiService.copiaDi(di_copia, nova_di))
        logger.info(`POST /di/copia-di - DI copiada: ${di_copia} - Nova DI ${nova_di}`)
    } catch (error) {
        next(error)
    }
}

export default {
    criarDi,
    alterarDi,
    buscaDi,
    buscaTodasDi,
    buscaDiPorSituacao,
    buscaDiPorTipo,
    copiaDi
}