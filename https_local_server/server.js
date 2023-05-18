const { createServer } = require("https");
const { parse } = require("url");
const next = require("next");
const fs = require("fs");

const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

const httpsOptions = {
  key: fs.readFileSync("./https_local_server/ssl/CA.key"),
  cert: fs.readFileSync("./https_local_server/ssl/CA.crt"),
};

app.prepare().then(() => {
  createServer(httpsOptions, (req, res) => {
    const parsedUrl = parse(req.url, true);
    handle(req, res, parsedUrl);
  }).listen(8443, (err) => {
    if (err) throw err;
    console.log(process.env.NODE_ENV);
    console.log("> Ready on https://localhost:8443");
  });
});
