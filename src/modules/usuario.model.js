import Sequelize from 'sequelize'
import SetorModel from './setor.model.js'
import db from '../connections/db.connection.js'

const Usuario = db.define('usuario', {
    usuario_id:{
        type:Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    nome:{
        type:Sequelize.STRING,
        allowNull: false
    },
    email:{
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
    },
    senha:{
        type: Sequelize.STRING,
        allowNull: false
    },
    setor_id:{
        type:Sequelize.INTEGER,
        allowNull: false
    },
    ativo: {
        type: Sequelize.BOOLEAN,
        default: true
    }
}, {tableName: 'usuario'})

Usuario.belongsTo(SetorModel, { foreignKey: 'setor_id'})

export default Usuario