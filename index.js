const express = require("express");
const nunjucks = require("nunjucks");

const app = express();

nunjucks.configure("views", {
  autoescape: true,
  express: app,
  watch: true
});

app.use(express.urlencoded({ extended: false }));
app.set("view engine", "njk");

app.get("/", (req, res) => {
  return res.render("new");
});
app.post("/check", (req, res) => {
  age = req.body.age;
  if (age > 18) {
    return res.render("major", { age });
  } else {
    return res.render("minor", { age });
  }
});
app.get("/minor", (req, res) => {
  return res.render("minor");
});

app.post("/major", (req, res) => {
  return rres.render("major");
});

app.listen(3000);
