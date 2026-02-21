import { createServer } from "node:http";
import { getDataFromDB } from "./database/db.js";

const PORT = 3000;

const server = createServer(async (req, res) => {
    const destinations = await getDataFromDB();

    if (req.url === "/api" && req.method === "GET") {
        res.setHeader("Content-Type", "application/json");
        res.end(JSON.stringify(destinations));
    } else {
        res.setHeader("Content-Type", "application/json");
        res.end(
            JSON.stringify({
                error: "not found",
                message: "The requested route does not exist",
            }),
        );
    }
});

server.listen(PORT, () => {
    console.log(`server is running port ${PORT}`);
});
