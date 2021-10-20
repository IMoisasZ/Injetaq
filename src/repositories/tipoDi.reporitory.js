import TipoDiModule from '../modules/tipoDi.module.js'

async function criarTipoDi(tipo_di){
    try {
        let tipoDiCadastrado = await TipoDiModule.create(tipo_di)
        return await buscarTipoDi(tipoDiCadastrado.tipo_di_id)
    } catch (error) {
        throw error
    }
}

async function alterarTipoDi(tipo_di){
    try {
        await TipoDiModule.update(tipo_di, {
            where:{
                tipo_di_id: tipo_di.tipo_di_id
            }
        })
        return await buscarTipoDi(tipo_di.tipo_di_id)
    } catch (error) {
        throw error
    }
}

async function buscarTipoDi(tipo_di_id){
    try {
        return await TipoDiModule.findByPk(tipo_di_id)
    } catch (error) {
        throw error
    }
}

async function buscaTiposDi(){
    try {
        return await TipoDiModule.findAll()
    } catch (error) {
        throw error
    }
}

async function alterarStatusTipoDi(tipo_di_id, ativo){
    try {
        await TipoDiModule.update({
            ativo
        },
        {
            where:{
                tipo_di_id
            }
        })
        return await buscarTipoDi(tipo_di_id)
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