import express from "express"
import serverless from 'serverless-http'
import cors from "cors"
import userRoutes from "./routes/userRoutes.js"
import matchRoutes from './routes/matchRoutes.js'
import db from "./database/db.js"
import { PORT } from "./config.js"
const app = express()

app.use("/", userRoutes)
app.use("/", matchRoutes)

/* app.use("/registrarme",blogRegister) */

app.use(cors());

app.use(express.json()) //analiza las solicitudes JSON entrantes y coloca los datos analizados en formato req.body

//base de datos
try {
    await db.authenticate()
    console.log("conexion a la BD OK")
} catch (error) {
    console.log(`conexion fallida por el error ${error}`)
}




app.listen(PORT, () => {
    console.log(`Servidor ok en el puerto ${PORT}`)
})

export default serverless(app)