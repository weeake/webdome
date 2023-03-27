console.log(123);
var http = require('http');
const server = http.createServer((req, res) => {
    res.write('aaaaa')
    res.end()
});
server.listen(80, () => {
    console.log("server is runing");
});