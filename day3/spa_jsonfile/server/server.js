import express from "express";
import cors from "cors";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());


// ------------------------------------------
// Find products.json
// ------------------------------------------

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const productsFile = path.join(
  __dirname,
  '../data/products.json'
);


// ------------------------------------------
// Read products.json
// ------------------------------------------

function readProducts() {

  const data = fs.readFileSync(
    productsFile,
    "utf-8"
  );

  return JSON.parse(data);
}


// ------------------------------------------
// Write products.json
// ------------------------------------------

function writeProducts(products) {

  fs.writeFileSync(
    productsFile,
    JSON.stringify(products, null, 2)
  );
}


// ==========================================
// GET ALL PRODUCTS
// ==========================================

app.get("/api/products", (req, res) => {

  try {

    const products = readProducts();

    res.json(products);

  } catch (error) {

    res.status(500).json({
      message: "Error reading products"
    });

  }

});


// ==========================================
// GET PRODUCT BY ID
// ==========================================

app.get("/api/products/:id", (req, res) => {

  try {

    const products = readProducts();

    const id = Number(req.params.id);

    const product = products.find(
      p => p.id === id
    );

    if (!product) {

      return res.status(404).json({
        message: "Product not found"
      });

    }

    res.json(product);

  } catch (error) {

    res.status(500).json({
      message: "Error reading product"
    });

  }

});


// ==========================================
// ADD PRODUCT
// ==========================================

app.post("/api/products", (req, res) => {

  try {

    const products = readProducts();

    const newId =
      products.length === 0
        ? 1
        : Math.max(
            ...products.map(p => p.id)
          ) + 1;


    const newProduct = {

      id: newId,

      title: req.body.title,

      price: Number(req.body.price),

      description: req.body.description,

      category: req.body.category,

      image: req.body.image,

      rating: req.body.rating || {
        rate: 0,
        count: 0
      }

    };


    products.push(newProduct);

    writeProducts(products);

    res.status(201).json(newProduct);

  } catch (error) {

    res.status(500).json({
      message: "Error adding product"
    });

  }

});


// ==========================================
// UPDATE PRODUCT
// ==========================================

app.put("/api/products/:id", (req, res) => {

  try {

    const products = readProducts();

    const id = Number(req.params.id);


    const index = products.findIndex(
      p => p.id === id
    );


    if (index === -1) {

      return res.status(404).json({
        message: "Product not found"
      });

    }


    const updatedProduct = {

      ...req.body,

      id: id

    };


    products[index] = updatedProduct;


    writeProducts(products);


    res.json(updatedProduct);

  } catch (error) {

    res.status(500).json({
      message: "Error updating product"
    });

  }

});


// ==========================================
// DELETE PRODUCT
// ==========================================

app.delete("/api/products/:id", (req, res) => {

  try {

    const products = readProducts();

    const id = Number(req.params.id);


    const productExists = products.some(
      p => p.id === id
    );


    if (!productExists) {

      return res.status(404).json({
        message: "Product not found"
      });

    }


    const updatedProducts =
      products.filter(
        p => p.id !== id
      );


    writeProducts(updatedProducts);


    res.json({
      message: "Product deleted successfully"
    });

  } catch (error) {

    res.status(500).json({
      message: "Error deleting product"
    });

  }

});


// ==========================================
// START SERVER
// ==========================================

app.listen(PORT, () => {

  console.log(
    `Server running at http://localhost:${PORT}`
  );

});