import { uuid } from "uuidv4";
import { Coordenada } from "./Coordenada";

export class Rota {

	public readonly id: string;
	public coordenadas: Coordenada[];

	constructor(id?: string) {
		this.id = id ? id : uuid();
	}

}
