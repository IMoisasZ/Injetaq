import OperacaoRepository from '../repositories/operacao.repository.js'

async function criarOperacao(operacao){
    try {
        if(typeof(!operacao.custo_operacao) === "number"){
            throw new Error('O custo da operação deve ser um numero, seguindo a mascara ao lado => "(n).00" Ex.: 15.21')
        }
        operacao.descricao = operacao.descricao.toUpperCase()
        return await OperacaoRepository.criarOperacao(operacao)
    } catch (error) {
        throw error
    }
}

async function alterarOperacao(operacao){
    try {
        if(typeof(!operacao.custo_operacao) === "number"){
            throw new Error('O custo da operação deve ser um numero, seguindo a mascara ao lado => "(n).00" Ex.: 15.21')
        }
        operacao.descricao = operacao.descricao.toUpperCase()
        return await OperacaoRepository.alterarOperacao(operacao)
    } catch (error) {
        throw error
    }
}

async function buscaOperacao(operacao_id){
    return await OperacaoRepository.buscaOperacao(operacao_id)
}

async function buscaOperacoes(){
    return await OperacaoRepository.buscaOperacoes()
}

async function alterarStatusOperacao(operacao_id, ativo){
    try {
        if(ativo === true || ativo === false){
            return await OperacaoRepository.alterarStatusOperacao(operacao_id, ativo)
        }
        throw new Error('O status deve ser "true" ou "false"')
    } catch (error) {
        throw error
    }
}

export default {
    criarOperacao,
    alterarOperacao,
    buscaOperacao,
    buscaOperacoes,
    alterarStatusOperacao
}