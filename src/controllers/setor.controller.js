import SetorService from '../services/setor.service.js'

async function criarSetor(req, res, next){
    try {
        let setor = req.body
        console.log(setor);
        if(!setor.nome){
            throw new Error('O nome do setor é obrigatório!')
        }
        res.send(await SetorService.criarSetor(setor))
        logger.info(`POST /setor - ${JSON.stringify(setor)}`)
    } catch (error) {
        next(error)
    }
}

async function alterarSetor(req, res, next){
    try {
        let setor = req.body
        if(!setor.nome){
            throw new Error('O nome do setor é obrigatório!')
        }
        res.send(await SetorService.alterarSetor(setor))
        logger.info(`PUT /setor - ${JSON.stringify(setor)}`)
    } catch (error) {
        next(error)
    }
}

async function buscarSetor(req, res, next){
    try {
        if(!req.params.setor_id){
            throw new Error('O ID do setor deve ser informado!')
        }
        res.send(await SetorService.buscarSetor(req.params.setor_id))
        logger.info(`GET /setor/:setor_id - ${req.params.setor_id}`)
    } catch (error) {
        next(error)
    }
}

async function buscarSetores(req, res, next){
    try {
        res.send(await SetorService.buscarSetores())
        logger.info(`GET /setor`)
    } catch (error) {
        next(error)
    }
}

async function desativarSetor(req, res, next){
    try {
        let {setor_id, ativo} = req.body   
        if(!setor_id || ativo.length === 0){
            throw new Error('O Setor ID e Ativo são obrigatórios')
        }
        res.send(await SetorService.desativarSetor(setor_id, ativo))
        logger.info(`POST /setor/desativar - ${setor_id} - ${ativo}`)
    } catch (error) {
        next(error)
    }
}

export default {
    criarSetor,
    alterarSetor,
    buscarSetor,
    buscarSetores,
    desativarSetor
}

