const express = require("express")

const cors = require("cors")

const app = express();

app.use(cors())

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

const db = require("./src/src/model/models")

db.sequelize.sync()

// routes

app.get("/test", (req, res) => {

    res.json({ message: "App started" });

});

// secured routes

require("./src/src/router/cv.router")(app)
require("./src/src/router/overview.routes")(app)
require("./src/src/router/about.router")(app)

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {

  console.log(`Server is running on port ${PORT}.`);

});