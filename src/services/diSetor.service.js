import DiSetorRepository from '../repositories/diSetor.repository.js'

async function criarDiSetor(diSetor){
    return await DiSetorRepository.criarDiSetor(diSetor)
}

async function alterarDiSetor(diSetor){
    return await DiSetorRepository.alterarDiSetor(diSetor)
}

async function buscaDiSetor(di_setor_id){
    return await DiSetorRepository.buscaDiSetor(di_setor_id)
}

async function deleteDiSetor(di_setor_id){
    await DiSetorRepository.deleteDiSetor(di_setor_id)
}

export default {
    criarDiSetor,
    alterarDiSetor,
    buscaDiSetor,
    deleteDiSetor
}