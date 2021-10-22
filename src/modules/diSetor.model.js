import Sequelize from 'sequelize'
import db from '../connections/db.connection.js'
import DiModelo from './di.model.js'
import SetorModelo from './setor.model.js'

const DiSetor = db.define('di_setor', {
    di_setor_id:{
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    di: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    setor_id: {
        type: Sequelize.INTEGER,
        allowNull: false
    }
}, { tableName: 'di_setor'})

DiSetor.hasMany(DiModelo, { foreignKey: 'di'})
DiSetor.belongsTo(SetorModelo, { foreignKey: 'setor_id'})

export default DiSetor