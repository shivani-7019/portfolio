const express = require("express");
const app = express();
const path = require("path");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));

const indexRoutes = require("./routes/index");
app.use("/", indexRoutes);

app.get('/projects', (req, res)=>{
  res.render('projects');
});

app.use((req, res, next) => {
  res.status(404).send('Page not found');
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});













