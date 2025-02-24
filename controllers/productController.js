const products = [];

const getAllProducts = (req, res) => {
    res.json(products);
};

const getProductById = (req, res) => {
    const product = products.find(p => p.id === parseInt(req.params.id));
    if (!product) return res.status(404).json({ message: 'Product not found' });
    res.json(product);
};

const createProduct = (req, res) => {
    const newProduct = { id: products.length + 1, ...req.body };
    products.push(newProduct);
    res.status(201).json(newProduct);
};

const updateProduct = (req, res) => {
    const product = products.find(p => p.id === parseInt(req.params.id));
    if (!product) return res.status(404).json({ message: 'Product not found' });
    Object.assign(product, req.body);
    res.json(product);
};

const deleteProduct = (req, res) => {
    const index = products.findIndex(p => p.id === parseInt(req.params.id));
    if (index === -1) return res.status(404).json({ message: 'Product not found' });
    products.splice(index, 1);
    res.status(204).send();
};

module.exports = { getAllProducts, getProductById, createProduct, updateProduct, deleteProduct };