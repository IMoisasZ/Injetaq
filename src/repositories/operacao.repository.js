import OperacaoModulo from '../modules/operacao.model.js'

async function criarOperacao(operacao){
    try {
        let operacaoCriada = await OperacaoModulo.create(operacao)
        return await buscaOperacao(operacaoCriada.operacao_id)
    } catch (error) {
        throw error
    }
}

async function alterarOperacao(operacao){
    try {
        await OperacaoModulo.update(operacao, {
            where:{
                operacao_id: operacao.operacao_id
            }
        }) 
        return await buscaOperacao(operacao.operacao_id)
    } catch (error) {
        throw error
    }
}

async function buscaOperacao(operacao_id){
    try {
        return await OperacaoModulo.findByPk(operacao_id)     
    } catch (error) {
        throw error
    }
}

async function buscaOperacoes(){
    try {
        return await OperacaoModulo.findAll()
    } catch (error) {
        throw error
    }
}

async function alterarStatusOperacao(operacao_id, ativo){
    try {
        await OperacaoModulo.update({
            ativo
        },
        {
            where:{
                operacao_id
            }
        })
        return await buscaOperacao(operacao_id)
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