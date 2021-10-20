import Sequelize from 'sequelize'
import sequelize from '../connections/db.connection.js'
import db from '../connections/db.connection.js'

const Operacao = db.define('operacao', {
    operacao_id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    descricao: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    custo_operacao: {
        type: Sequelize.NUMBER,
        allowNull: false,
    },
    ativo: {
        type: Sequelize.BOOLEAN,
        default: true
    }
}, { tableName: 'operacao'})

export default Operacao