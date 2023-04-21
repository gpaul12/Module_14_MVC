// TODO: Add a comment indicating how this file fits into the MVC framework (is it a Model, a View, or a Controller?) and what it is responsible for handling.
// It is a controller.  Handles routes and routing.

const router = require("express").Router();

// TODO: Add a comment describing the purpose of the get route
// Default route to home page
router.get("/", async (req, res) => {
  //TODO: Add a comment describing the purpose of the render method
  //
  res.render("all");
});

module.exports = router;
