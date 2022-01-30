import express from "express";
import morgan from "morgan";
import { config } from "./config/config";
import { connectDB } from "./config/db";
import Company from "./models/company";
import { sha256 } from "./utils/crypto";

const app = express();
app.use(morgan("dev"));
connectDB();
app.get("/", (req, res) => res.json({ hello: "world" }));

app.post("/company/register", (req, res) => {
	const { name, email, redirectURL } = req.query;
	const APISecret = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
	const APIId = sha256(email);
	const company = new Company({
		name,
		email,
		APISecret,
		APIId,
		redirectURL,
	});
	company.save((err, company) => {
		if (err) {
			return res.status(400).json({
				error: err
			});
		}
		return res.json({
			message: "Company registered successfully",
			company
		});
	});
});

app.get("/company/getDetails", (req, res) => {
	const { APIId } = req.query;
	Company.findOne({ APIId }, (err, company) => {
		if (err) {
			return res.status(400).json({
				error: "Company not found"
			});
		}
		return res.json({
			message: "Company found",
			company
		});
	});
});

app.listen(config.port, () => {
	console.log("listening on", config.port);
});
