import { uuid } from "uuidv4";

export class Usuario {

	public readonly id: string;
	public matricula: string;

	constructor(props: Omit<Usuario, 'id'>, id?: string) {
		Object.assign(this, props);
		this.id = id ? id : uuid();
	}

}
