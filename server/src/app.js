import express from "express";

const app = express();

app.get("/", (req, res) => res.json({ hello: "world" }));

app.listen(9000, () => {
	console.log("listening on 9000");
});
