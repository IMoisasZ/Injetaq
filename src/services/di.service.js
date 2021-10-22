import DiRepository from '../repositories/di.repository.js'

function validarDadosDi(dados){
        // função para passar as letras dos campos das DI's para Maiusculas!
        dados.os = dados.os !== "" ? dados.os.toUpperCase() : "" 
        dados.numero_pedido = dados.os !== "" ? dados.numero_pedido.toUpperCase() : ""
        dados.numero_orcamento = dados.os !== "" ? dados.numero_orcamento.toUpperCase() : ""
        dados.descricao = dados.os !== "" ? dados.descricao.toUpperCase() : ""
        dados.numero = dados.os !== "" ? dados.numero.toUpperCase() : ""
        dados.op = dados.os !== "" ? dados.op.toUpperCase() : ""
        dados.nome_peca = dados.os !== "" ? dados.nome_peca.toUpperCase() : ""
        dados.numero_peca = dados.os !== "" ? dados.numero_peca.toUpperCase() : ""
}

async function criarDi(dadosDi){
    try {
        validarDadosDi(dadosDi)

        return await DiRepository.criarDi(dadosDi)
    } catch (error) {
        throw error
    }
}

async function alterarDi(dadosDi){
    try {
        validarDadosDi(dadosDi)

        return await DiRepository.alterarDi(dadosDi)
    } catch (error) {
        throw error
    }
}

async function buscaDi(di){
    return await DiRepository.buscaDi(di)
}

async function buscaTodasDi(){
    return await DiRepository.buscaTodasDi()
}

async function buscaDiPorSituacao(situacao_id){
    return await DiRepository.buscaDiPorSituacao(situacao_id)
}

async function buscaDiPorTipo(tipo_di_id){
    return await DiRepository.buscaDiPorTipo(tipo_di_id)
}

async function copiaDi(diCopia, novaDi){
    try {
        let di = await buscaDi(diCopia)
        let diValues = di.dataValues
        diValues.di_id = undefined
        diValues.di = novaDi
        return await DiRepository.criarDi(diValues)
    } catch (error) {
        throw error
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