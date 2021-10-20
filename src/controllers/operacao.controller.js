import OperacaoService from '../services/operacao.service.js'

async function criarOperacao(req, res, next){
    try {
        let operacao = req.body
        if(!operacao.descricao || !operacao.custo_operacao){
            throw new Error('A descrição e o custo da operação são obrigatórios!')
        }
        res.send(await OperacaoService.criarOperacao(operacao))
        logger.info(`POST /operacao - ${JSON.stringify(operacao)}`)
    } catch (error) {
        next(error)
    }
}

async function alterarOperacao(req, res, next){
    try {
        let operacao = req.body
        if(!operacao.descricao || !operacao.custo_operacao){
            throw new Error('A descrição e o custo da operação são obrigatórios!')
        }
        res.send(await OperacaoService.alterarOperacao(operacao))
        logger.info(`PUT /operacao - ${JSON.stringify(operacao)}`)
    } catch (error) {
        next(error)
    }
}

async function buscaOperacao(req, res, next){
    try {
        res.send(await OperacaoService.buscaOperacao(req.params.operacao_id))
        logger.info(`GET /operacao/:operacao_id - ${req.params.operacao_id}`)
    } catch (error) {
        next(error)
    }
}

async function buscaOperacoes(req, res, next){
    try {
        res.send(await OperacaoService.buscaOperacoes())
        logger.info(`GET /operacao`)
    } catch (error) {
        next(error)
    }
}

async function alterarStatusOperacao(req, res, next){
    try {
        let {operacao_id, ativo} = req.body
        if(!operacao_id || ativo.length === 0){
            throw new Error('A operação ID e ativo são obrigatórios!')
        }
        res.send(await OperacaoService.alterarStatusOperacao(operacao_id, ativo))
        logger.info(`PUT /operacao/alterar-status-operacao - ${operacao_id} - ${ativo}`)
    } catch (error) {
        next(error)
    }
}

export default {
    criarOperacao,
    alterarOperacao,
    buscaOperacao,
    buscaOperacoes,
    alterarStatusOperacao
}