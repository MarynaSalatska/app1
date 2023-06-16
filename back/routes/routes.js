const express = require("express");
const { getData } = require("../controllers/dataController");
const {removeData} = require("../controllers/dataController")
const isValidId = require("../middlewares/isValidId");

const router = express.Router();

// Define your endpoint to fetch data from the collection
router.get("/api/data", getData);

router.delete("/api/data/:id", isValidId, removeData);
// router.delete("/delItem", authMiddlewares, async (req, res, next) =>
//   itemsController.deleteItem(req, res).catch(next)
// );

module.exports = router;
