exports.getAllProducts = (req, res, next) => {
  res.json({ message: "Get All Products" });
};

exports.getProduct = (req, res, next)=> {
  res.json({ message: "Get Product Detail"});
};

exports.creatProduct = (req, res, next)=> {
  res.json({ message: " Creat Product "});
};

exports.updateProduct = (req, res, next)=> {
  res.json({ message: "update Product"});
};

exports.deleteProduct = (req, res, next)=> {
  res.json({ message: "delete Product"});
};
