const express = require("express");
const router = express.Router();
const { createMenuWithItems, getMenus, getMenuById } = require("../controllers/menuController");


router.post("/", createMenuWithItems);


router.get("/", getMenus);


router.get("/:id", getMenuById);

module.exports = router;
