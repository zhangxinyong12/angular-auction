import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private products:Array<Product>=[
    new Product(1,'第一个商品',1.99,1.5,'描述',['苹果']),
    new Product(2,'第2个商品',1.99,3.5,'描述',['苹果']),
    new Product(3,'第3个商品',1.99,4.5,'描述',['苹果']),
    new Product(4,'第4个商品',1.99,3.5,'描述',['苹果']),
    new Product(5,'第5个商品',1.99,2.5,'描述',['苹果']),
    new Product(6,'第6个商品',1.99,5,'描述',['苹果']),
  ];
  private comments:Comment[]=[
    new Comment(1,1,'2018-6-6 20:20:20','张三1',3,'东西不错'),
    new Comment(2,3,'2018-6-6 20:20:20','张三2',4,'东西不错'),
    new Comment(3,1,'2018-6-6 20:20:20','张三3',5,'东西不错'),
    new Comment(4,1,'2018-6-6 20:20:20','张三4',2,'东西不错'),
    new Comment(5,2,'2018-6-6 20:20:20','张三5',1,'东西不错'),
    new Comment(6,1,'2018-6-6 20:20:20','张三6',3,'东西不错'),
  ];
  constructor() { }
  getProducts():Product[]{
    return this.products;
  }
  getProduct(id:number):Product{
    return this.products.find((product)=>product.id==id)
  }
  getCommentsForProductId(id:number):Comment[]{
    return this.comments.filter((comment:Comment)=>comment.productId==id)
  }
}

export class Product {
  constructor(
    public id:number,
    public title:string,
    public price:number,
    public rating:number,
    public desc:string,
    public cateqories:Array<string>
  ){}
}
export class Comment{
  constructor(
    public id:number,
    public productId:number,
    public timestamp:string,
    public user:string,
    public rating:number,
    public content:string
  ){}
}