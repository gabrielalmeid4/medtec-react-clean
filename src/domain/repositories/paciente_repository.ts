import { Paciente } from "../entities/paciente_entity"
import { BaseRepo } from "./base_repository"

export interface PacienteRepo extends BaseRepo<Paciente> {
    buscarPorID(): Paciente
}