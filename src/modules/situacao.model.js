import Sequelize from 'sequelize'
import db from '../connections/db.connection.js'

const Situacao = db.define('situacao', {
    situacao_id:{
        type:Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    nome:{
        type: Sequelize.STRING,
        allowNull: false
    },
    ativo: {
        type:Sequelize.BOOLEAN,
        default: true
    }
}, { tableName: 'situacao'})

export default Situacao