import http from "http"

const server = http.createServer((req, res) => {
    // console.log(req);
    res.setHeader("Content-Type", "text/html")
    res.write("<h1>Hello from nodejs server</h1>")
})

server.listen(8000, () => console.log("server up"))