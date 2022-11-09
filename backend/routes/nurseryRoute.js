const express = require("express");
const router = express.Router();
const { isAuthenticatedUser, authorizesdRoles } = require("../middleware/auth");
const { createNursery } = require("../controllers/nurseryController");

router.route("/nursery/new").post(isAuthenticatedUser, createNursery);


module.exports = router;