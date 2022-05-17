import { Router } from 'express';
import db from '../database/db.js'

const router = Router();

router.delete('/database', (req, res) => {
	try {
		db.sync({ force: true })
		res.status(200).send({ message: 'Database deletada!' });

	} catch (error) {
		console.log(error);
		res.status(500).send({ error: error.message })
	}
})

export default router;
