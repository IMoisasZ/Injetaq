import SituacaoService from '../services/situacao.service.js'

async function criarSituacao(req, res, next){
    try {
        let situacao = req.body
        if(!situacao.nome){
            throw new Error('A descrição da situação deve ser preenchida!')
        }
        res.send(await SituacaoService.criarSituacao(situacao))
        logger.info(`POST /situacao - ${JSON.stringify(situacao)}`)
    } catch (error) {
        next(error)
    }
}

async function alterarSituacao(req, res, next){
    try {
        let situacao = req.body
        if(!situacao.nome){
            throw new Error('A descrição da situação deve ser preenchida!')
        }
        res.send(await SituacaoService.alterarSituacao(situacao))
        logger.info(`PUT /situacao -${JSON.stringify(situacao)}`)
    } catch (error) {
        next(error)
    }
}

async function buscarSituacao(req, res, next){
    try {
        res.send(await SituacaoService.buscarSituacao(req.params.situacao_id))
        logger.info(`GET /situacao/:situacao_id - ${situacao_id}`)
    } catch (error) {
        next(error)
    }
}

async function buscarSituacoes(req, res, next){
    try {
        res.send(await SituacaoService.buscarSituacoes())
        logger.info(`GET /situacao`)
    } catch (error) {
        next(error)
    }
}

async function alterarStatusSituacao(req, res, next){
    try {
        let {situacao_id, ativo} = req.body
        if(!situacao_id || ativo.length === 0){
            throw new Error('A situação ID e ativo são obrigatórios!')
        }
        res.send(await SituacaoService.alterarStatusSituacao(situacao_id, ativo))
        logger.info(`PUT /situacao/alterar-status-situacao - ${situacao_id} - ${ativo}`)
    } catch (error) {
        next(error)
    }
}

export default {
    criarSituacao,
    alterarSituacao,
    buscarSituacao,
    buscarSituacoes,
    alterarStatusSituacao
}