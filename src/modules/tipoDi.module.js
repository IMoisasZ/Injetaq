import Sequelize from 'sequelize'
import db from '../connections/db.connection.js'

const TipoDi = db.define('tipo_di', {
    tipo_di_id:{
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    descricao:{
        type: Sequelize.STRING,
        allowNull: false
    },
    ativo:{
        type: Sequelize.BOOLEAN,
        default: true
    }
}, {tableName: 'tipo_di'})

export default TipoDi