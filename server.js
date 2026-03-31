const express=require('express');
const app=express();
const port=3000;

//MIDDLEWARE
app.use(express.json());

/*-------------ROUTES-------------*/

//GET /products
app.get('/products',(req,res)=>{
    res.send('Here is the list of products.');
});

//POST /products
app.post('/products',(req,res)=>{
    res.send('A new product has been added.');
});

//get / categories
app.get('/categories',(req,res)=>{
    res.send('Here is the list of categories.');
});

//POST /categories
app.post('/categories',(req,res)=>{
    res.send('A new category has been created.');
});

/*----------wildcard route---*/

app.use((req, res) => {
    res.status(404).send('<h1>404 - Page Not Found</h1>');
});

/*----------server start-*/
app.listen(port,()=>{
    console.log(`Server is running on http://localhost:3000`);
});