/* === External Modules === */
const express = require("express");
const methodOverride = require("method-override");
const session = require("express-session");
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
// middleware to serve public as static files (css)
app.use(express.static(`${__dirname}/public`));


// // setup session middleware
app.use(session({
    store: MongoStore.create({ mongoUrl: process.env.MONGO_URI }),
    secret: "super secret waffles",
    resave: false,
    saveUnitialized: false,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24
    }
}));

// // logger middleware
app.use(function (req, res, next) {
    console.log(`${req.method} - ${req.url}`);
    console.log(req.session);
    next();
});

// // authRequired middleware
const authRequired = function (req, res, next) {
    if (req.session.currentUser) {
        return next();
    }
    return res.redirect('/login');
};


/* === Routes/Controllers === */
// Welcome
app.get("/", function (req, res) {
    const context = { user: req.session.currentUser }
    res.render("Welcome");
});
//auth controller
app.use('/', controllers.auth);

// site controller
app.use('/', authRequired, controllers.site);





/* === Server Listener === */
app.listen(PORT, function () {
    console.log(`Car shop is live at http://localhost:${PORT}/`);
});

app.use(express.static(`public`))