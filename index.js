//Installed ExpressJs Framework for Modularity
const express = require('express');
const log = require('./middlewares/ActivityLog')
//Using express
const app = express();
app.use(express.json());
//Custom Middlewares
app.use(log);

const Orders = [
  {
    Id: 1024, 
    RestaurantName: 'KFC', 
    OrderDetails:[
    {
    "id": 4,
    "name": "Mighty Zinger",
    "quantity": 3,
    "unitprice": 600,
    "totalprice": 1800,
    "mealId": 1,
    "createdAt": "2020-06-03 09:00:58.045 +00:00",
    "updatedAt": "2020-06-03 09:00:58.045 +00:00",
    "orderId": 1024
  },
  {
    "id": 2,
    "name": "Chicken & Chips",
    "quantity": 2,
    "unitprice": 425,
    "totalprice": 850,
    "mealId": 2,
    "createdAt": "2020-06-03 09:00:58.045 +00:00",
    "updatedAt": "2020-06-03 09:00:58.045 +00:00",
    "orderId": 1024
  }
]
}
,{
  Id: 1025, 
  RestaurantName: 'Dominos', 
  OrderDetails:[
  {
  "id": 6,
  "name": "Tangy Wings",
  "quantity": 1,
  "unitprice": 299,
  "totalprice": 299,
  "mealId": 54,
  "createdAt": "2020-07-03 09:00:58.045 +00:00",
  "updatedAt": "2020-07-03 09:00:58.045 +00:00",
  "orderId": 1025
},
{
  "id": 7,
  "name": "Large Deal 7",
  "quantity": 2,
  "unitprice": 1999,
  "totalprice": 3998,
  "mealId": 76,
  "createdAt": "2020-07-03 09:00:58.045 +00:00",
  "updatedAt": "2020-07-03 09:00:58.045 +00:00",
  "orderId": 1025
}
]
}
];

//Creating basic Get API
app.get('/',(req,res) => {
    res.send('This is a Basic Get API')
});

//Get API for getting All Orders
app.get('/api/MyOrders', (req,res) => {
  res.send(Orders);
});

//Get API for getting order by id
app.get('/api/Order/:id', (req, res) => {
  const order = Orders.find(o => o.Id == req.params.id);
  order == null ? res.status(404).send('Order Not Found ...!') : res.send(order);
});

//Basic POST API for adding new order
app.post('/api/Orders', (req,res) => {
  const order = {
    Id: req.body.Id,
    RestaurantName: req.body.RestaurantName,
    OrderDetails:req.body.OrderDetails
  };
  Orders.push(order);
  res.send(order);
});

// Assiging port to the application
const PORT = process.env.PORT || 2022;

//using environment port
app.listen(PORT, ()=> {console.log(`The App is running on port : ${PORT}`)})