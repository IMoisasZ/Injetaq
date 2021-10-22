import express from 'express'
import winston from 'winston'
import ClienteRoute from './src/routes/cliente.route.js'
import SetorRoute from './src/routes/setor.route.js'
import UsuarioRoute from './src/routes/usuario.route.js'
import SituacaoRoute from './src/routes/situacao.route.js'
import TipoDiRoute from './src/routes/tipoDi.route.js'
import OperacaoRoute from './src/routes/operacao.route.js'
import DiRoute from './src/routes/di.route.js'
import DiSetorRoute from './src/routes/diSetor.route.js'

const app = express()

app.use(express.json())


// winston(log)
const { combine, timestamp, label, printf} = winston.format;
const myformat = printf (({ level, message, label, timestamp}) => {
    return `${timestamp} [${label}] ${level} ${message}`;
})
global.logger = winston.createLogger({
    level: "silly",
    transports: [
        new (winston.transports.Console)(),
        new (winston.transports.File)({filename: "injetaq-log" })
    ],
    format: combine(
        label({ label: "injetaq-log" }),
        timestamp(),
        myformat
    )
});


// rotas
app.use('/cliente', ClienteRoute)
app.use('/setor', SetorRoute)
app.use('/usuario', UsuarioRoute)
app.use('/situacao', SituacaoRoute)
app.use('/tipo_di', TipoDiRoute)
app.use('/operacao', OperacaoRoute)
app.use('/di', DiRoute)
app.use('/di_setor', DiSetorRoute)

// erro padrão
app.use((err, req, res, next) => {
    global.logger.error(`${req.method} ${req.baseUrl} - ${err.message}`)
    res.status(400).send({ erros: err.message })
})


export default app