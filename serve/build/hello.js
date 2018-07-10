// const http=require('http');
// let server=http.createServer((request,response)=>{
//     response.end('hello Node');
// });
// server.listen(8000);
// console.log('启动成功')
var express = require('express');
var app = express();
var Product = /** @class */ (function () {
    function Product(id, title, price, rating, desc, cateqories) {
        this.id = id;
        this.title = title;
        this.price = price;
        this.rating = rating;
        this.desc = desc;
        this.cateqories = cateqories;
    }
    return Product;
}());
var product = [
    new Product(1, '第一个商品', 1.99, 1.5, '描述', ['苹果', '苹果2', '苹果3']),
    new Product(2, '第2个商品', 1.99, 3.5, '描述', ['苹果']),
    new Product(3, '第3个商品', 1.99, 4.5, '描述', ['苹果', '苹果3']),
    new Product(4, '第4个商品', 1.99, 3.5, '描述', ['苹果', '苹果2']),
    new Product(5, '第5个商品', 1.99, 2.5, '描述', ['苹果']),
    new Product(6, '第6个商品', 1.99, 5, '描述', ['苹果', '苹果3']),
];
app.get('/', function (req, res) {
    res.send('hello express');
});
app.get('/product', function (req, res) {
    res.json(product);
});
var server = app.listen(8000, 'localhost', function () {
    console.log(product);
    console.log('服务启动成功----------');
});
