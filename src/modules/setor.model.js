import Sequelize from 'sequelize'
import db from '../connections/db.connection.js'

const Setor = db.define('setor', {
    setor_id:{
        type:Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    nome:{
        type:Sequelize.STRING,
        allowNull: false
    },
    ativo:{
        type:Sequelize.BOOLEAN,
        default: true
    }
}, {tableName: 'setor'})

export default Setor