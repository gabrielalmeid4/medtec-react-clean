import { Application } from "express";
import { BaseRoute } from "./base_route";

export class PacientesRoute extends BaseRoute {
  constructor(app: Application, sufixo: string) {
    super(app, "Rotas de Paciente", sufixo);
  }

  configurarRotas(): Application {
    return this.app;
  }
}