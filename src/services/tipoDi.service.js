import TipoDiRepository from '../repositories/tipoDi.reporitory.js'

async function criarTipoDi(tipo_di){
    try {
        tipo_di.descricao = tipo_di.descricao.toUpperCase()
        return await TipoDiRepository.criarTipoDi(tipo_di)
    } catch (error) {
        throw error
    }
}

async function alterarTipoDi(tipo_di){
    try {
        tipo_di.descricao = tipo_di.descricao.toUpperCase()
        return await TipoDiRepository.alterarTipoDi(tipo_di)
    } catch (error) {
        throw error
    }
}

async function buscarTipoDi(tipo_di_id){
    return await TipoDiRepository.buscarTipoDi(tipo_di_id)
}

async function buscaTiposDi(){
    return await TipoDiRepository.buscaTiposDi()
}

async function alterarStatusTipoDi(tipo_di_id, ativo){
    try {
        if(ativo === true || ativo === false){
            return await TipoDiRepository.alterarStatusTipoDi(tipo_di_id, ativo)
        }
        throw new Error('O status deve ser "true" ou "false"!')
    } catch (error) {
        throw error
    }
}

export default {
    criarTipoDi,
    alterarTipoDi,
    buscarTipoDi,
    buscaTiposDi,
    alterarStatusTipoDi
}