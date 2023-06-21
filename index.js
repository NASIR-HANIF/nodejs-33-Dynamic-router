const express = require("express");
const server = new express();
server.listen(8080);

const router = require("./modules/route");
server.use("/user",router);  // express router midlewear
server.use("/employee",router);
server.use("/*",router);