var http = require("http");

const httpServer = http.createServer(handleServer);

function handleServer(req, res) {
  
  res.setHeader("Content-Type", "text/plain");

  
  if (req.url === "/welcome") {
    res.writeHead(200);
    res.end("Welcome to Dominos!");
  } else if (req.url === "/contact") {
    
    res.setHeader("Content-Type", "application/json");
    const contactInfo = {
      phone: "18602100000",
      email: "guestcaredominos@jublfood.com",
    };
    res.writeHead(200);
    res.end(JSON.stringify(contactInfo));
  } else {
    
    res.writeHead(404);
    res.end("Not Found");
  }
}

module.exports = httpServer;


httpServer.listen(8081, () => {
  console.log("Server is running on port 8081");
});
