const express = require("express");
const app= express();
const path = require("path");

app.listen(3000, ()=>{console.log("servidor corriendo en puerto 3000")});

app.set("view engine", "ejs");
app.use(express.static(path.resolve(__dirname, "public")));


const indexRouter = require("./routes/index");
const productsRouter = require("./routes/products");

app.use("/", indexRouter);
app.use("/products", productsRouter);


