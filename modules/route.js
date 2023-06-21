const express = require("express");
const user = require("./user");
const employee = require("./employee")
const notFound = require("./notfound");
const router = express.Router();

const controller = (middleWeare) => {
    switch (middleWeare) {
        case "/user": return user();

            break;
        case "/employee": return employee();

            break;

        default: return notFound();
            break;
    }
}


router.get("/", (request, response) => {
    const result = controller(request.originalUrl)
    response.status(200);
    response.send(result)
})

router.post("/", (request, response) => {
    const result = controller(request.originalUrl)
    response.status(200);
    response.send(result)
})

router.put("/", (request, response) => {
    const result = controller(request.originalUrl)
    response.status(200);
    response.send(result)
})

router.delete("/", (request, response) => {
    const result = controller(request.originalUrl)
    response.status(200);
    response.send(result)
})

module.exports = router;