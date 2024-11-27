import { Application } from 'express'

export abstract class BaseRoute {
    protected app: Application
    private nome: string
    protected sufixo: string

    constructor(app: Application, nome: string, sufixo: string) {
        this.app = app
        this.nome = nome
        this.sufixo = sufixo
    }

    getNome() {
        return this.nome
    }

    abstract configurarRotas(): Application
}