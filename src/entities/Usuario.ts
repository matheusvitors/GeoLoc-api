import { uuid } from "uuidv4";

export class Usuario {

	public readonly id: string;
	public matricula: string;

	constructor(matricula: string, id?: string) {
		this.matricula = matricula;
		this.id = id ? id : uuid();
	}

}
