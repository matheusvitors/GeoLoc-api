import { JwtAdapter } from "../adapters/jwt.adapter.js";

function authenticate(req, res, next) {
	const { token } = req.headers;

	// console.log(req.headers);

	try {

		if(!token) {
			return res.status(401).send({
				auth: false,
				message: "Token não encontrado."
			})
		}

		const isValid = new JwtAdapter().verify(token);

		if(!isValid) {
			return res.status(401).send({
				auth: false,
				message: "Token inválido."
			})
		}

		next();

	} catch (error) {
		res.status(500).send({
			error: error.message
		});
	}

}

function unless(middleware, ...paths) {
	return function (req, res, next) {
		if(process.env.AUTHENTICATE === 'false') {
			next();
		} else {
			const isAllowedPath = paths.some(path => path === req.path);
			isAllowedPath ? next() : middleware(req, res, next);
		}
	}
}

export { authenticate, unless }
