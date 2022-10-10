import dotenv from "dotenv";
import app from "./app";

dotenv.config();

const PG_PORT = process.env.PG_PORT || 5000;
const MONGO_PORT = process.env.MONGO_PORT || 4000;

app.listen(PG_PORT, ()=>{
    console.log(`Postgres is listening on port ${PG_PORT}`);
});

app.listen(MONGO_PORT, ()=>{
    console.log(`Mongo is listening on port ${MONGO_PORT}`)
})