const authController = require("../controllers/authController");

const listingControllers = require("../controllers/listingControllers");
const profileController = require("../controllers/profileController");

const middleware = require("../middleware/authMiddleware");

module.exports = (app) => {
  // Auth routes
  app.post("/register", authController.register);
  app.post("/login", authController.login);

  //Listing Route
  app.get("/listings", listingControllers.getAllListings);
  app.get("/listings/:id", listingControllers.getListingById);
  app.post("/listings", listingControllers.createListing);
  app.put("/listings/:id", listingControllers.updateListing);
  app.delete("/listings/:id", listingControllers.deleteListing);

  //Profile Route
app.get("/profile", profileController.getProfile)
app.put("/editUser/:id", profileController.editUser)
// app.put("/profile/:id", profileController.editLocation)
};
