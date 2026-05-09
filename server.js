const express = require("express");

const app = express();
const PORT = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

app.set("view engine", "ejs");

app.get("/", (req, res) => {
    res.render("index", { message: null });
});

app.post("/submit", (req, res) => {
    const { username, email, phone, gender } = req.body;

    res.render("index", {
       message: `Thank You ${username}! Your details were submitted successfully.`
    });
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});