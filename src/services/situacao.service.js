import SituacaoRepository from '../repositories/situacao.repository.js'

async function criarSituacao(situacao){
    try {
        situacao.nome = situacao.nome.toUpperCase()
        return await SituacaoRepository.criarSituacao(situacao)
    } catch (error) {
        throw error
    }
}

async function alterarSituacao(situacao){
    try {
        situacao.nome = situacao.nome.toUpperCase()
        return await SituacaoRepository.alterarSituacao(situacao)
    } catch (error) {
        throw error
    }
}

async function buscarSituacao(situacao_id){
    return await SituacaoRepository.buscarSituacao(situacao_id)
}

async function buscarSituacoes(){
    return await SituacaoRepository.buscarSituacoes()
}

async function alterarStatusSituacao(situacao_id, ativo){
    try {
        if(ativo === true || ativo === false){
            return await SituacaoRepository.alterarStatusSituacao(situacao_id, ativo)
        }
        throw new Error('O status deve ser "true ou "false"!')
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