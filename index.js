const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 5000;

app.use(cors());

const courses = require("./data/courses.json");

app.get("/", (req, res) => {
  res.send("study elegant server running");
});

app.get("/allcourses", (req, res) => {
  res.send(courses);
});

app.get("/course/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const singleCourse = courses.find((course) => course.id === id);
  res.send(singleCourse);
});

app.listen(port, () => {
  console.log("server running on port", port);
});

module.exports = app;
