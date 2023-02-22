const express = require("express");

let server = express();

server.set("view engine", "ejs");
server.use(express.static("public"))

const adminRouter = require("./Routes/AdminRoute")
const userRouter = require("./Routes/UserRoute")

server.use("/admin", adminRouter)
server.use("/user", userRouter)

// server.use(express.json())

server.get("/", (req, res) => {
    res.render("HomePage")
});

server.listen(3000, () => {
    console.log("Listening to the server in port 3000");
});

