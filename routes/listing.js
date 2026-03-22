const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync.js");
const Listing = require("../models/listing.js")
const {isLoggedIn,isOwner,validateListing ,isHostOrAdmin} = require("../middleware.js")

const listingController = require("../controllers/listings.js")
const multer = require("multer");
const {storage} = require("../cloudConfig.js");
const upload = multer({storage})

router.route("/")
.get( wrapAsync(listingController.index))
.post(isLoggedIn,
    upload.single("listing[image]"),
    validateListing,
    wrapAsync(listingController.createListing)
);


//search route
router.get("/search", async (req, res) => {
    let { location } = req.query;
    // console.log("Search value:", req.query.location);

    if (!location) {
        return res.redirect("/listings");
    }

    location = location.trim();

    const allListings = await Listing.find({
        $or: [
            { location: { $regex: location, $options: "i" } },
            { country: { $regex: location, $options: "i" } }
        ]
    });

    res.render("listings/index.ejs", { allListings });
});



// New Route
router.get("/new",isLoggedIn,isHostOrAdmin,listingController.renderNewForm);


router.route("/:id")
.get(wrapAsync(listingController.showListing))
.put(
    isLoggedIn,
    isOwner,
    upload.single("listing[image]"),
    validateListing,
    wrapAsync(listingController.updateListing)
)
.delete(isLoggedIn,isOwner,wrapAsync(listingController.destroyListing))


// Edit Route
router.get(
    "/:id/edit",
    isLoggedIn,
    isOwner,
    wrapAsync(listingController.renderEditForm)
)




module.exports = router;
