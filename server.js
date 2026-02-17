import { createServer } from "node:http";
import { getDataFromDB } from "./database/db.js";

const PORT = 3000;

const server = createServer((req, res) => {
    if (req.url === "/api" && req.method === "GET"){
        res.end("data has been sent from /api route");
    }
});

server.listen(PORT, () => {
    console.log(`server is running port ${PORT}`);
});
