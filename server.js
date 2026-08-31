// Basic HTTP Server

const http = require("http");

const PORT = 3000;

const server = http.createServer((req, res) => {

    console.log("Request received:", req.url);

    res.setHeader("Content-Type", "text/html");

    if (req.url === "/") {
        res.statusCode = 200;
        res.end(`
            <h1>Welcome to Smart Utility Toolkit</h1>
            <p>This is the Home Page.</p>
        `);
    }

    else if (req.url === "/about") {
        res.statusCode = 200;
        res.end(`
            <h1>About Page</h1>
            <p>This project is created using Node.js.</p>
        `);
    }

    else if (req.url === "/contact") {
        res.statusCode = 200;
        res.end(`
            <h1>Contact Page</h1>
            <p>Contact us for more information.</p>
        `);
    }

    else {
        res.statusCode = 404;
        res.end(`
            <h1>404 Error</h1>
            <p>Page Not Found</p>
        `);
    }
});

server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});