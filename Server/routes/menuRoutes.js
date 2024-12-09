const express = require("express");
const { createMenu, getMenus, addItem } = require("../controllers/menuController");

const router = express.Router();

router.post("/", createMenu);
router.get("/", getMenus);
router.post("/item", addItem);

module.exports = router;
