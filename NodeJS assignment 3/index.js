let fs = require('fs');
let http = require('http');

let htmlContent = `
<h1> Hello World </h1>
<p> This is Vaibhav </p>
`;

let filePath = "index.html";

fs.writeFile(filePath, htmlContent, (err)=> {
    if(err){
        console.error("Error in creating the file")
    } else{
        console.log("Created Succussfully");
    }
})

let server = http.createServer((req,res)=>{
    res.writeHead(200,{"content-type":"text/html"});
    fs.readFile("index.html", "utf-8", (err, data) => {
        if (err) {
            res.end("failed")
        }
        res.end(data);
    })
    
})
server.listen(5000, () => console.log("server is runnig at 5000"))



