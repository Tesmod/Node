import http from "http"

const server = http.createServer((req, res) => {
    if (req.url === "/") {
        res.end ("<h1>Homepage</h1>")
    } else if (req.url === "/about") {
        res.end("<h2>This is the about page</h2>")
    } else {
        res.end("<h1>404 Page not found</h1>")
    }
})

server.listen(8000, () => console.log("Server up!"))