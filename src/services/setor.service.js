import SetorRepository from '../repositories/setor.repository.js'

async function criarSetor(setor){
    try {
        setor.nome = setor.nome.toUpperCase()
        return await SetorRepository.criarSetor(setor)
    } catch (error) {
        throw error
    }
}

async function alterarSetor(setor){
    try {
        setor.nome = setor.nome.toUpperCase()
        return await SetorRepository.alterarSetor(setor)
    } catch (error) {
        throw error
    }
}

async function buscarSetor(setor_id){
    return await SetorRepository.buscarSetor(setor_id)
}

async function buscarSetores(){
    return await SetorRepository.buscarSetores()
}

async function desativarSetor(setor_id, ativo){
    try{
        if(ativo === true || ativo === false){
            return await SetorRepository.desativarSetor(setor_id, ativo)
        }
        throw new Error('O status deve ser "true" ou "false"')
    } catch(error){
        throw error
    }
}

export default {
    criarSetor,
    alterarSetor,
    buscarSetor,
    buscarSetores,
    desativarSetor
}