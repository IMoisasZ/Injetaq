import DiModulo from '../modules/di.model.js'

async function criarDi(dadosDi){
    try {
        let diCadastrada = await DiModulo.create(dadosDi)
        return await buscaDi(diCadastrada.di)
    } catch (error) {
        throw error
    }
}

async function alterarDi(dadosDi){
    try {
        await DiModulo.update(dadosDi, {
            where:{
                di: dadosDi.di
            }
        })
        return await buscaDi(dadosDi.di)
    } catch (error) {
        throw error
    }
}

async function buscaDi(di){
    try {
        return await DiModulo.findByPk(di)
    } catch (error) {
        throw error
    }
}

async function buscaTodasDi(){
    try {
        return await findAll()
    } catch (error) {
        throw error
    }
}

export default {
    criarDi,
    alterarDi,
    buscaDi,
    buscaTodasDi
}