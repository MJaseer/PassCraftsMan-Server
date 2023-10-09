import express from "express";
import connectDataBase from "./config/databse/mongo";
import router from "./router/userRoutes/userRoutes";
import dotenv from "dotenv";
dotenv.config();
import morgan from "morgan";
import cors from 'cors'

const app = express()

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', 'https://passcraftsman.netlify.app');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Credentials', 'true');
    next()
})

app.use(cors({
    credentials: true,
    origin: 'https://passcraftsman.netlify.app',
    methods: ["GET,HEAD,OPTIONS,POST,PUT,DELETE"]
}))

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"))

connectDataBase()

app.use("/api", router)

const port = process.env.PORT

app.listen(port, () => {
    console.log(`The server start at running on port ${port}`);
});