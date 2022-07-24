"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_1 = __importDefault(require("http"));
const dotenv_1 = __importDefault(require("dotenv"));
const axios_1 = __importDefault(require("axios"));
dotenv_1.default.config();
const host = "localhost";
const port = 8000;
const NOTION_ACCESS_KEY = process.env.NOTION_ACCESS_KEY;
const NOTION_DB_ID = process.env.NOTION_DB_ID;
const server = http_1.default.createServer((req, res) => {
    // Avoid CORS errors
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Content-Type", "application/json");
    switch (req.url) {
        // Will respond to queries to the domain root (like http://localhost/)
        case "/":
            res.writeHead(200);
            res.end(JSON.stringify({ data: "success" }));
            break;
        case "/notion/database/read":
            axios_1.default
                .post(`https://api.notion.com/v1/databases/${NOTION_DB_ID}/query`, {}, {
                headers: {
                    Authorization: `Bearer ${NOTION_ACCESS_KEY}`,
                    "Notion-Version": "2022-02-22",
                },
            })
                .then((result) => {
                const contents = result.data.results;
                res.writeHead(200);
                res.end(JSON.stringify({ data: contents }));
            });
            break;
        default:
            res.writeHead(404);
            res.end(JSON.stringify({ error: "Resource not found" }));
    }
});
server.listen(port, host, () => {
    console.log(`Server is running on http://${host}:${port}`);
});
