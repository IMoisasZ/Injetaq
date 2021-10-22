import DiSetorModelo from "../modules/diSetor.model.js"
import SetorModelo from '../modules/setor.model.js'

async function criarDiSetor(diSetor){
    try {
        let diSetorCriada = await DiSetorModelo.create(diSetor)
        return await buscaDiSetor(diSetorCriada.di_setor_id)
    } catch (error) {
        throw error
    }
}

async function alterarDiSetor(diSetor){
    try {
        await DiSetorModelo.update(diSetor, {
            where:{
                di_setor_id: diSetor.di_setor_id
            }
        })
        return buscaDiSetor(diSetor.di_setor_id)
    } catch (error) {
        throw error
    }
}

async function buscaDiSetor(di_setor_id){
    try {
        return DiSetorModelo.findByPk(di_setor_id,{
            include: [
                {
                    model: SetorModelo
                }
            ]
        })
    } catch (error) {
        throw error
    }
}

async function deleteDiSetor(di_setor_id){
    try {
        await DiSetorModelo.destroy({
            where:{
                di_setor_id
            }
        })
    } catch (error) {
        throw error
    }
}

export default {
    criarDiSetor,
    alterarDiSetor,
    buscaDiSetor,
    deleteDiSetor
}