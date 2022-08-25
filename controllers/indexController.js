const listProducts=[
    {
    image:"images/img-samsung-galaxy-s10.jpg", 
    price:"70.500", 
    discount:"10% off", 
    description: "Samsung Galaxy S10"
    },
    {
        image:"images/img-macbook-pro-2019.jpg", 
        price:"36.799", 
        discount:"20% off", 
        description: "Lenovo S2"
    },
    {
       image:"images/img-tv-samsung-smart.jpg", 
       price:"45.999", 
       discount:"60% off", 
       description: "TV Samsung 32"
    },
    {
        image:"images/img-samsung-galaxy-s10.jpg", 
        price:"70.500", 
        discount:"10% off", 
        description: "Samsung Galaxy S10"
        },
        {
            image:"images/img-macbook-pro-2019.jpg", 
            price:"36.799", 
            discount:"20% off", 
            description: "Lenovo S2"
        },
        {
           image:"images/img-tv-samsung-smart.jpg", 
           price:"45.999", 
           discount:"60% off", 
           description: "TV Samsung 32"
        }
    ]


const indexController ={
    home: (req, res) => {
        res.render("home", {listProducts: listProducts});
    },
    about:(req, res)=>{
        res.render("about");
    }
}

module.exports = indexController;
