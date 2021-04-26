/* === External Modules === */
const express = require("express");
const methodOverride = require("method-override");
const sesson = require("express-session");
const MongoStore = require("connect-mongo");
const db = require('./models');

/* === Internal Modules === */
const controllers = require("./controllers");

/* === Instanced Modules === */
const app = express();

/* === Configuration === */
require('dotenv').config();
const PORT = 5000;

app.set("view engine", "ejs");

/* === Middleware === */
// body data middleware
app.use(express.urlencoded({ extended: true }));
// method override
app.use(methodOverride("_method"));
// middler to serve public as static files (css)


// setup session middleware



/* === Routes/Controllers === */
// Welcome
app.get("/", function (req, res) {
    res.send("Welcome");
});




/* === Server Listener === */
app.listen(PORT, function () {
    console.log(`Car shop is live at http://localhost:${PORT}/`);
});