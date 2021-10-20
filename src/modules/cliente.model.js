import Sequelize from 'sequelize'
import db from '../connections/db.connection.js'

const Cliente = db.define('cliente', {
    cliente_id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    nome: {
        type: Sequelize.STRING,
        allowNull: false
    },
    ativo: {
        type: Sequelize.BOOLEAN,
        default: true,
    }
}, { tableName: 'cliente'})

export default Cliente