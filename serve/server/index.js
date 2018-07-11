// const http=require('http');
// let server=http.createServer((request,response)=>{
//     response.end('hello Node');
// });
// server.listen(8000);
// console.log('启动成功')
var express = require('express');
var app = express();
var WebSocketServer = require('ws');
app.all('*', function (req, res, next) {
    // res.header("Access-Control-Allow-Origin", "*");
    // res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
    // res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    // res.header("X-Powered-By",' 3.2.1')
    if (req.method == "OPTIONS")
        res.send(200); /*让options请求快速返回*/
    else
        next();
});
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
var products = [
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
app.get('/api/product', function (req, res) {
    res.json(products);
});
app.get('/api/product/:id', function (req, res) {
    console.log(req.params.id);
    var arr = [];
    products.map(function (product) {
        if (product.id == req.params.id) {
            arr.push(product);
        }
        ;
        return arr;
    });
    //添加请求头 允许跨域
    res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By", ' 3.2.1');
    res.json(arr);
});
var server = app.listen(8000, 'localhost', function () {
    console.log('服务启动成功----------');
});
var wss = new WebSocketServer.Server({
    port: 8989
});
wss.on('connection', function (ws) {
    ws.on('message', function (message) {
        console.log('服务端接收到的数据' + message);
        var _loop_1 = function (i) {
            setTimeout(function () {
                if (i > 5) {
                    ws.terminate();
                }
                ws.send('接收消息，发送给客户端' + i);
            }, i * 1000);
        };
        for (var i = 0; i < 10; i++) {
            _loop_1(i);
        }
        ;
    });
    ws.send('第一次接收，建立连接');
});
