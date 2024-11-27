import { Response, Request } from 'express'

class PacientesController {
    public adicionar(req: Request, res: Response) {
        res.status(201).json({...req.body})
    }
    
    public listar(req: Request, res: Response) {
        res.status(200).json([])
    }

    public atualizar(req: Request, res: Response) {
        res.status(200).json({...req.body, id: req.params.id})
    }

    public remover(req: Request, res: Response) {
        res.status(200).json({...req.body, id: req.params.id})
    }
}

export default new PacientesController();