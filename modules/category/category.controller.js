const ResponseType = require("../../dto/response.type");
const CategoryEntity = require("../../models/category.model");

exports.getAllCategory = async (req, res) => {
  try {
    const categoryList = await CategoryEntity.find();
    res.json(new ResponseType(categoryList).success());
  } catch (error) {
    res.json(new ResponseType(null).error());
  }
};

exports.getCategoryById = async (req, res) => {
  try {
    const { id } = req.params;
    const categoryDetail = await CategoryEntity.findById(id);
    res.json(new ResponseType(categoryDetail).success());
  } catch (error) {
    res.json(new ResponseType(null).error());
  }
};
