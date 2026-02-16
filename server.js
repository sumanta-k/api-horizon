import { createServer } from "node:http";

const PORT = 3000;

const server = createServer((req, res) => {
    console.log(req.headers);
    if (req.url === "/api") {
        res.end("data has been sent from /api route");
    }
});

server.listen(PORT, () => {
    console.log(`server is running port ${PORT}`);
});
