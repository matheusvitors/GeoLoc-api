import jwt from "jsonwebtoken";

export class JwtAdapter {

	generate (id) {
		return jwt.sign({ id }, process.env.SECRET, {
			expiresIn: 4 * 60 * 60 * 1000 //4 horas
		});
	}

	verify(token) {
		return jwt.verify(token, process.env.SECRET);
	}
}
