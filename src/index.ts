import "./dotenv";
import express from "express";
import morgan from "morgan";
import path from "path";
import router from "./router";

const app = express();

app.use(morgan("dev"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(express.static(path.join(__dirname, "static")));
app.use(router);

const PORT = 7000;

app.listen(PORT);
console.info(`\n\n\n\n\tServidor rodando em http://localhost:${PORT}\n\n\n`);
