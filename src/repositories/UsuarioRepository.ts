import { Usuario } from "entities/Usuario";


export interface UsuarioRepository {
	list(): Promise<Usuario>
	findById(id: string): Promise<Usuario>
	save(): Promise<void>
}
