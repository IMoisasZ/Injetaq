import SituacaoModel from '../modules/situacao.model.js'

async function criarSituacao(situacao){
    try {
        let situacaoCriada = await SituacaoModel.create(situacao)
        return await buscarSituacao(situacaoCriada.situacao_id)
    } catch (error) {
        throw error
    }
}

async function alterarSituacao(situacao){
    try {
        await SituacaoModel.update(situacao, {
            where:{
                situacao_id: situacao.situacao_id
            }
        })
        return await buscarSituacao(situacao.situacao_id)
    } catch (error) {
        throw error
    }
}

async function buscarSituacao(situacao_id){
    try {
        return await SituacaoModel.findByPk(situacao_id)
    } catch (error) {
        throw error
    }
}

async function buscarSituacoes(){
    try {
        return await SituacaoModel.findAll()
    } catch (error) {
        throw error
    }
}

async function alterarStatusSituacao(situacao_id, ativo){
    try {
        await SituacaoModel.update({
            ativo
        },
        {
            where:{
                situacao_id
            }
        })
        return await buscarSituacao(situacao_id)
    } catch (error) {
        throw error
    }
}

export default {
    criarSituacao,
    alterarSituacao,
    buscarSituacao,
    buscarSituacoes,
    alterarStatusSituacao
}