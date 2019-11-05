// server.js
// where your node app starts

// init project
const express = require("express");
const app = express();
const fs = require("fs");
// we've started you off with Express,
// but feel free to use whatever libs or frameworks you'd like through `package.json`.

// http://expressjs.com/en/starter/static-files.html
app.use(express.static("public"));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function(request, response) {
  response.sendFile(__dirname + "/views/index.html");
});

app.get("/fonts", (req, res) => {
  require("fs").readdir(`${__dirname}/fonts`, (err, files) => {
    files.forEach(file => {
      const fontName =
        `"font_${file}`
          .split("/")
          .pop()
          .split(".")
          .slice(0)[0] + '"';
      const font = `$.fonts[${fontName}]`;
      console.log(`Sent ${font} (${fontName}) to client.`)
      res.write("{");
      res.write("const $ = window.$;");
      res.write(
        fs
          .readFileSync(`${__dirname}/fonts/${file}`, "utf8")
          .replace("//{{name}}//", fontName)
      );
      res.write("}");
    });
    res.end();
  });
});

// listen for requests :)
const listener = app.listen(process.env.PORT, function() {
  console.log("Your app is listening on port " + listener.address().port);
});
