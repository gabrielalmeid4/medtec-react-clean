class Consulta {
    constructor(private cod_consul: number, private cod_pac: number, private motivo: string,
                private dt_prev_consulta: Date, private dt_consul: Date, private valor: number,
                private status: string
    )
    {}
}