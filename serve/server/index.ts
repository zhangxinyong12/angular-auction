// const http=require('http');
// let server=http.createServer((request,response)=>{
//     response.end('hello Node');
// });
// server.listen(8000);
// console.log('启动成功')
const express = require('express');
const app = express();
app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By",' 3.2.1')
    if(req.method=="OPTIONS") res.send(200);/*让options请求快速返回*/
    else  next();
});
class Product {
    constructor(
      public id:number,
      public title:string,
      public price:number,
      public rating:number,
      public desc:string,
      public cateqories:Array<string>
    ){}
  }
const products:Array<Product>=[
    new Product(1,'第一个商品',1.99,1.5,'描述',['苹果','苹果2','苹果3']),
    new Product(2,'第2个商品',1.99,3.5,'描述',['苹果']),
    new Product(3,'第3个商品',1.99,4.5,'描述',['苹果','苹果3']),
    new Product(4,'第4个商品',1.99,3.5,'描述',['苹果','苹果2']),
    new Product(5,'第5个商品',1.99,2.5,'描述',['苹果']),
    new Product(6,'第6个商品',1.99,5,'描述',['苹果','苹果3']),
  ];
  
app.get('/', (req, res) => {
    res.send('hello express');
});
app.get('/api/product', (req, res) => {
    res.json(products)
});
app.get('/api/product/:id',(req,res)=>{
    console.log(req.params.id)
    let arr=[];
    products.map((product)=>{
        if(product.id==req.params.id){
            arr.push(product);
        };
        return arr;
    })
    res.json(arr)
})
const server = app.listen(8000, 'localhost', () => {
    console.log('服务启动成功----------');
});