import Products from '../models/products.js';

//Get all products
export const getProducts = async (req, res) => {
  const options = {
    limit: parseInt(req.query.limit, 10) || 10,
    page: parseInt(req.query.page, 10) || 1,
    sort: { createdAt: -1, updatedAt: -1 },
  };
  try {
    const products = await Products.paginate({}, options);
    res.status(200).json(products);
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
};

//Get product by id
export const getProductById = async (req, res) => {
  try {
    const product = await Products.findById(req.params.id);

    res.status(200).send(product);
    console.log(product);
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
};

//Create new product
export const createProduct = async (req, res) => {
  const product = req.body;

  const newProduct = new Products(product);
  try {
    await newProduct.save();

    res.status(201).json(newProduct);
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
};

//Update product
export const updateProduct = async (req, res) => {
  try {
    const updated = await Products.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );

    res.status(201).send(updated);
  } catch (error) {
    res.status(500).json(error);
  }
};

//Delete product
export const deleteProduct = async (req, res) => {
  try {
    await Products.findByIdAndDelete(req.params.id);

    res.status(200).json('Product deleted successfully');
  } catch (error) {
    res.status(500).json(error);
  }
};
