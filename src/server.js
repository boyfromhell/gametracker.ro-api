const http = require("http");
const dotenv = require('dotenv');
dotenv.config();

const app = require("./app");
const server = http.createServer(app);
app.listen(process.env.PORT ?? 3000, () =>
    console.log(`Example app listening on port ${process.env.PORT ?? 3000}!`),
);