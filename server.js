import { createServer } from "node:http";

const PORT = 3000;

const server = createServer((req, res) => {
    console.log(req);
    console.log(req.method);
});

server.listen(PORT, () => {
    console.log(`server is running port ${PORT}`);
});
