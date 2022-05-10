import { Router } from "express";


const router = Router();

router.get('/', (req, res) => {
	return res.json({
		status: 'Connected',
		name: "Geoloc-api"
	})
})

export { router };
