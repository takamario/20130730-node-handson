var http = require("http")
  , hackathon = require("./hackathon")
  , hackathon_mod_exp = require("./hackathon_mod_exp");

http.createServer(function(req, res) {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("Hello Tokyo\n");
}).listen(3000);

console.log("Server running at http://localhost:3000/");
hackathon.say();
console.log(hackathon.name);
console.log(hackathon_mod_exp);
