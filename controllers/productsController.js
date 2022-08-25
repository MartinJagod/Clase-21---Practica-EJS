const listProducts=[
    {
        id:1,
    image:"images/img-samsung-galaxy-s10.jpg", 
    price:"70.500", 
    discount:"10% off", 
    description: "Samsung Galaxy S10"
    },
    {
        id:2,
        image:"images/img-macbook-pro-2019.jpg", 
        price:"36.799", 
        discount:"20% off", 
        description: "Lenovo S2"
    },
    {
        id:3,
       image:"images/img-tv-samsung-smart.jpg", 
       price:"45.999", 
       discount:"60% off", 
       description: "TV Samsung 32"
    },
    {
        id:4,
        image:"images/img-samsung-galaxy-s10.jpg", 
        price:"70.500", 
        discount:"10% off", 
        description: "Samsung Galaxy S10"
        },
        {
            id:5,
            image:"images/img-macbook-pro-2019.jpg", 
            price:"36.799", 
            discount:"20% off", 
            description: "Lenovo S2"
        },
        {
            id:6,
           image:"images/img-tv-samsung-smart.jpg", 
           price:"45.999", 
           discount:"60% off", 
           description: "TV Samsung 32"
        }
    ]


const productsController ={
    list: (req, res) => {
        res.render("productsList", {listProducts:listProducts});
    },
    detail:(req, res)=>{
        const product = listProducts.find(oneProduct => oneProduct.id == req.params.id)
        res.render("productDetail", {product: product});
    }
}

module.exports = productsController;
