const express = require("express");
const router = express.Router();

// Homepage Route
router.get("/", (req, res) => {
    res.render("index");
});

//About Route
router.get('/about', (req, res)=>{
    res.render('about');
});

// Projects Route
router.get("/projects", (req, res) => {
    res.render("projects");
});

// Skills Route
router.get("/skills", (req, res) => {
    res.render("skills");
});

// Contact Route
router.get("/contact", (req, res) => {
    res.render("contact");
});

module.exports = router;
