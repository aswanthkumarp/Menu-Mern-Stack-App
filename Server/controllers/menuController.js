const Menu = require("../models/Menu");
const MenuItem = require("../models/MenuItem");


exports.createMenu = async (req, res) => {
  try {
    const menu = new Menu(req.body);
    await menu.save();
    res.status(201).json(menu);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};


exports.getMenus = async (req, res) => {
  try {
    const menus = await Menu.find().populate("items");
    res.status(200).json(menus);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};


exports.addItem = async (req, res) => {
  try {
    const menuItem = new MenuItem(req.body);
    await menuItem.save();

    const menu = await Menu.findById(menuItem.id);
    menu.items.push(menuItem);
    await menu.save();

    res.status(201).json(menuItem);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
