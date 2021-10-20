import TipoDiService from "../services/tipoDi.service.js";

async function criarTipoDi(req, res, next){
    try {
        let tipo_di = req.body
        if(!tipo_di.descricao){
            throw new Error('A descrição é obrigatória!')
        }
        res.send(await TipoDiService.criarTipoDi(tipo_di))
        logger.info(`POST /tipo_di - ${JSON.stringify(tipo_di)}`)
    } catch (error) {
        next(error)
    }
}

async function alterarTipoDi(req, res, next){
    try {
        let tipo_di = req.body
        if(!tipo_di.descricao){
            throw new Error('A descrição é obrigatória!')
        }
        res.send(await TipoDiService.alterarTipoDi(tipo_di))
        logger.info(`PUT /tipo_di - ${JSON.stringify(tipo_di)}`)
    } catch (error) {
        next(error)
    }
}

async function buscarTipoDi(req, res, next){
    try {
        res.send(await TipoDiService.buscarTipoDi(req.params.tipo_di_id))
        logger.info(`GET /tipo_di/:tipo_di_id - ${req.params.tipo_di_id}`)
    } catch (error) {
        next(error)
    }
}

async function buscaTiposDi(req, res, next){
    try {
        res.send(await TipoDiService.buscaTiposDi())
        logger.info
    } catch (error) {
        next(error)
    }
}

async function alterarStatusTipoDi(req, res, next){
    try {
        let {tipo_di_id, ativo} = req.body
        if(!tipo_di_id || ativo.length === 0){
            throw new Error('O ID tipo DI e ativo são obrigatórios!')
        }
        res.send(await TipoDiService.alterarStatusTipoDi(tipo_di_id, ativo))
        logger.info(`PUT /tipo_di/alterar-status-tipo_di - ${tipo_di_id} - ${ativo}`)
    } catch (error) {
        next(error)
    }
}

export default {
    criarTipoDi,
    alterarTipoDi,
    buscarTipoDi,
    buscaTiposDi,
    alterarStatusTipoDi
}