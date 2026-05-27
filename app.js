const path = require("path");
const express = require("express");
const { engine } = require("express-handlebars");
const profile = require("./data/profile");

const app = express();
const PORT = process.env.PORT


app.engine(
  "handlebars",
  engine({
    defaultLayout: "main",
  })
);

app.set("view engine", "handlebars");
app.set("views", path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname, "public")));

app.get("/", (_req, res) => {
  res.render("home", {
    pageTitle: profile.seo.title,
    metaDescription: profile.seo.description,
    profile,
    year: new Date().getFullYear(),
  });
});

app.listen(PORT, () => {
  console.log(`Portfolio running at http://localhost:${PORT}`);
});
