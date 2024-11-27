export interface BaseRepo<T> {
    adicionar(): T
    listar(): T[]
    remover(id: number): T
    atualizar(id: number, dados: Partial<T>): T
}