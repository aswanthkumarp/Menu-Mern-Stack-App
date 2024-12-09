const Menu = require("../models/Menu");
const MenuItem = require("../models/MenuItem");


exports.createMenuWithItems = async (req, res) => {
  const session = await Menu.startSession();
  session.startTransaction();

  try {
    const { name, description, items } = req.body;

 
    if (!name || !description || !Array.isArray(items) || items.length === 0) {
      throw new Error("Invalid menu data. Please provide all required fields.");
    }

  
    const menuItems = await MenuItem.insertMany(items, { session });

   
    const itemIds = menuItems.map((item) => item._id);


    const menu = new Menu({ name, description, items: itemIds });
    await menu.save({ session });

    await session.commitTransaction();
    session.endSession();

    res.status(201).json({ message: "Menu created successfully", menu });
  } catch (err) {
    await session.abortTransaction();
    session.endSession();
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


exports.getMenuById = async (req, res) => {
  try {
    const { id } = req.params;

 
    if (!id.match(/^[0-9a-fA-F]{24}$/)) {
      return res.status(400).json({ error: "Invalid menu ID" });
    }


    const menu = await Menu.findById(id).populate("items");

    if (!menu) {
      return res.status(404).json({ error: "Menu not found" });
    }

    res.status(200).json(menu);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
