import express, {Request, Response} from 'express'
import "reflect-metadata"
import { PacientesRoute } from './presentation/routes/paciente_routes'
import { BaseRoute } from './presentation/routes/base_route'

const app = express()

app.use(express.json())

app.get("/hello", (req: Request, res: Response) => {
    res.status(200).json({msg: "Hello"})
})

const routes: Array<BaseRoute> = [];
routes.push(
    new PacientesRoute(app, "pacientes")
)

app.listen(300, () => {
    for (let route of routes) {
        console.log(route.getNome())
    }
    console.log("Servidor rodando em 3000.")
}) 