import { uuid } from "uuidv4";

export class Coordenada {

	public readonly id: string;
	public latitude: string;
	public longitude: string;
	public timestamp: string;

	constructor(props: Omit<Coordenada, 'id'>, id?: string) {
		Object.assign(props, this);
		this.id = id ? id : uuid();
	}
}
