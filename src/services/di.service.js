import Situacao from '../modules/situacao.model.js'
import DiRepository from '../repositories/di.repository.js'

async function criarDi(dadosDi){
    try {
        // passando as letras para maiusculas
        dadosDi.os = dadosDi.os.toUpperCase()
        dadosDi.numero_pedido = dadosDi.numero_pedido.toUpperCase()
        dadosDi.numero_orcamento = dadosDi.numero_orcamento.toUpperCase()
        dadosDi.descricao = dadosDi.descricao.toUpperCase()
        dadosDi.numero = dadosDi.numero.toUpperCase()
        dadosDi.op = dadosDi.op.toUpperCase()
        dadosDi.nome_peca = dadosDi.nome_peca.toUpperCase()
        dadosDi.numero_peca = dadosDi.numero_peca.toUpperCase()

        return await DiRepository.criarDi(dadosDi)
    } catch (error) {
        throw error
    }
}

async function alterarDi(dadosDi){
    try {
        // passando as letras para maiusculas
        dadosDi.os = dadosDi.os.toUpperCase()
        dadosDi.numero_pedido = dadosDi.numero_pedido.toUpperCase()
        dadosDi.numero_orcamento = dadosDi.numero_orcamento.toUpperCase()
        dadosDi.descricao = dadosDi.descricao.toUpperCase()
        dadosDi.numero = dadosDi.numero.toUpperCase()
        dadosDi.op = dadosDi.op.toUpperCase()
        dadosDi.nome_peca = dadosDi.nome_peca.toUpperCase()
        dadosDi.numero_peca = dadosDi.numero_peca.toUpperCase()

        return await DiRepository.alterarDi(dadosDi)
    } catch (error) {
        throw error
    }
}

async function buscaDi(di){
    return await DiRepository.buscaDi(di)
}

async function buscaTodasDi(situacao_id){
    if(situacao_id){
        return await DiRepository.buscaDiPorSituacao(situacao_id)
    }
    return await DiRepository.buscaTodasDi()
}

async function buscaDiPorSituacao(situacao_id){
    return await DiRepository.buscaDiPorSituacao(situacao_id)
}

export default {
    criarDi,
    alterarDi,
    buscaDi,
    buscaTodasDi,
    buscaDiPorSituacao
}