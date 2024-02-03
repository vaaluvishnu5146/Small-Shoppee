const express = require("express");
const APP_SERVER = express();

// API ROUTERS
APP_SERVER.use("/api/auth", require("./Routers/Authentication.router"));
APP_SERVER.use("/api/products", require("./Routers/Products.router"));

// WEBSITE ROUTERS
APP_SERVER.get("/", (req, res) => {
  res.write(`
    <html>
        <head>
            <title>Home</title>
        </head>
        <body>
            <h1>Welcome to Small Shopee</h1>
        </body>
    </html>
    `);
});

module.exports = APP_SERVER;
