import { Router, type Request, type Response } from 'express'
import { UserController } from '../controllers/userControllers.ts'

export class UserRoutes {
    router: Router
    constructor () {
        this.router = Router()
        this.setRoutes()
        this.controller = new UserController()
    }

    setRoutes() {
        this.router.route('/')
        .get((req: Request, res: Response) => {
            const allUsers = this.controller.getAllUsers()
            res.status(200).json(allUsers)
        })
    }
}