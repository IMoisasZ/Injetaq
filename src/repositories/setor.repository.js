import SetorMoldel from '../modules/setor.model.js'

async function criarSetor(setor){
    try {
        let setorCriado = await SetorMoldel.create(setor)
        console.log(setorCriado);
        return await buscarSetor(setorCriado.setor_id)
    } catch (error) {
        throw error
    }
}

async function alterarSetor(setor){
    try {
        await SetorMoldel.update(setor, {
            where:{
                setor_id: setor.setor_id
            }
        })
        return await buscarSetor(setor.setor_id)
    } catch (error) {
        throw error
    }
}

async function buscarSetor(setor_id){
    try {
        return await SetorMoldel.findByPk(setor_id)
    } catch (error) {
        throw error
    }
}

async function buscarSetores(){
    try {
        return await SetorMoldel.findAll()
    } catch (error) {
        throw error
    }
}

async function desativarSetor(setor_id, ativo){
    try {
        await SetorMoldel.update(
            {
                ativo 
            },
            {
                where:{
                    setor_id
                }
            })
            return await buscarSetor(setor_id)
    } catch (error) {
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