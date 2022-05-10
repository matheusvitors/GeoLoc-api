import express from "express";
import 'dotenv/config';
import { router } from "./routes";

const app = express();

app.use(router);
const port = process.env.PORT || 8585;

app.listen(port, () => {
	console.log("API running on port %s", port);
})
