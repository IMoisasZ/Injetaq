
import Sequelize from 'sequelize'

const sequelize = new Sequelize('injetaq',"root","",
{
    dialect: 'mysql',
    define: {
        timestamps:true
    }
})

export default sequelize