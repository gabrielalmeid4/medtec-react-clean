export class Paciente {
    constructor(private cod_pac: number, private cpf: string, private nome: string,
                private contato: string, private endereco: string, private dt_nasc: Date
    ) {}
}
