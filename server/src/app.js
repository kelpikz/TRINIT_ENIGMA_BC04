import express from "express";
import morgan from "morgan";
import { config } from "./config/config";
import { connectDB } from "./config/db";

const app = express();
app.use(morgan("dev"));
connectDB();
app.get("/", (req, res) => res.json({ hello: "world" }));

app.listen(config.port, () => {
	console.log("listening on", config.port);
});
