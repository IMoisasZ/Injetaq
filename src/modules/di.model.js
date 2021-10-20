import Sequelize from 'sequelize'
import db from '../connections/db.connection.js'
import ClienteModel from './cliente.model.js'
import TipoDiModel from './tipoDi.module.js'
import SituacaoModel from './situacao.model.js'

const DI = db.define('di', {
    di_id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        unique: true
    },
    di: {
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    os: {
        type: Sequelize.STRING,
        allowNull: true
    },
    numero_Pedido:{
        type: Sequelize.STRING,
        allowNull: false
    },
    numero_orcamento:{
        type: Sequelize.STRING,
        allowNull: true
    },
    descricao: {
        type: Sequelize.STRING,
        allowNull: true
    },
    numero: {
        type: Sequelize.STRING,
        allowNull: true
    },
    op: {
        type: Sequelize.STRING,
        allowNull: true
    },
    nome_peca: {
        type: Sequelize.STRING,
        allowNull: true
    },
    cliente_id: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    inicio: {
        type: Sequelize.DATE,
        allowNull: true
    },
    prazo: {
        type: Sequelize.DATE,
        allowNull:true
    },
    andamento: {
        type: Sequelize.NUMBER,
        allowNull: true
    },
    data_atualizacao: {
        type: Sequelize.DATE,
        allowNull: true
    },
    tipo_di_id: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    situacao_id: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    entrega: {
        type: Sequelize.DATE,
        allowNull: true
    }
}, { tableName: 'di'})

DI.belongsTo(ClienteModel, { foreignKey: 'cliente_id'})
DI.belongsTo(TipoDiModel, { foreignKey: 'tipo_di_id'})
DI.belongsTo(SituacaoModel, { foreignKey: 'situacao_id'})

export default DI