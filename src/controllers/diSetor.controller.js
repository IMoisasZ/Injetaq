import DiSetorService from '../services/diSetor.service.js'

async function criarDiSetor(req, res, next){
    try {
        let diSetor = req.body
        res.send(await DiSetorService.criarDiSetor(diSetor))
        logger.info(`POST /di_setor - ${JSON.stringify(diSetor)}`)
    } catch (error) {
        next(error)
    }
}

async function alterarDiSetor(req, res, next){
    try {
        let diSetor = req.body
        res.send(await DiSetorService.alterarDiSetor(diSetor))
        logger.info(`PUT /di_setor - ${JSON.stringify(diSetor)}`)
    } catch (error) {
        next(error)
    }
}

async function buscaDiSetor(req, res, next){
    try {
        res.send(await DiSetorService.buscaDiSetor(req.params.di_setor_id))
        logger.info(`GET /di_setor - ${req.params.di_setor_id}`)
    } catch (error) {
        next(error)
    }
}

async function deleteDiSetor(req, res, next){
    try {
        await DiSetorService.deleteDiSetor(req.params.di_setor_id)
        console.log(req.params.di_setor_id);
        res.json({Delete: `Registro ${req.params.di_setor_id} excluido com sucesso!`})
        logger.info(`DELETE /di_setor - ${req.params.di_setor_id}`)
    } catch (error) {
        next(error)
    }
}

export default {
    criarDiSetor,
    alterarDiSetor,
    buscaDiSetor,
    deleteDiSetor
}