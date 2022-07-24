import http from "http";
import dotenv from "dotenv";
import axios from "axios";
dotenv.config();

const host = "localhost";
const port = 8000;

const NOTION_ACCESS_KEY = process.env.NOTION_ACCESS_KEY;
const NOTION_DB_ID = process.env.NOTION_DB_ID;

const server = http.createServer((req, res) => {
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
      axios
        .post(
          `https://api.notion.com/v1/databases/${NOTION_DB_ID}/query`,
          {},
          {
            headers: {
              Authorization: `Bearer ${NOTION_ACCESS_KEY}`,
              "Notion-Version": "2022-02-22",
            },
          }
        )
        .then((result: any) => {
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
