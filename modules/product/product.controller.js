let products = [];

const ResponseType = require("../../dto/response.type");
const ProductEntity = require("../../models/product.model");

exports.getAllProducts = async (req, res) => {
  const productList = await ProductEntity.find();
  res.render("product/index", {
    title: "05K1",
    products: productList,
  });
};

exports.createProduct = (req, res) => {
  res.render("product/create");
};

exports.postCreateProduct = async (req, res) => {
  try {
    const {
      body: { name, price, image },
    } = req;
    const product = new ProductEntity({ name, price, image });
    await product.save();
    res.json(new ResponseType(true).success());
  } catch (error) {
    res.json(new ResponseType(null).error());
  }
};
exports.putEditProduct = async (req, res) => {
  try {
    const { body } = req;
    const { id } = req.params;
    const updateProduct = await ProductEntity.findByIdAndUpdate(
      id,
      {
        name: body.name,
        price: body.price,
        image: body.image,
      },
      {
        new: true,
        runValidators: true,
      }
    );

    if (!updateProduct) {
      res.json(new ResponseType(null).error());
    }
    res.json(new ResponseType(updateProduct).success());
  } catch (error) {
    res.json(new ResponseType(null).error());
  }
};

exports.getDetailProduct = async (req, res) => {
  const { id } = req.params;
  const product = await ProductEntity.findById(id);
  res.render("product/detail", { product });
};

exports.getDetailProductByApi = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await ProductEntity.findById(id);
    res.json(new ResponseType(product).success());
  } catch (error) {
    res.json(new ResponseType(null).error());
  }
};

exports.deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const deleteProduct = await ProductEntity.findByIdAndDelete(id);

    if (!deleteProduct) {
      res.json(new ResponseType(false).error());
    }
    res.json(new ResponseType(true).success());
  } catch (error) {
    res.json(new ResponseType(false).error());
  }
};
