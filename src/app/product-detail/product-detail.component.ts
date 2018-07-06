import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product, ProductService ,Comment} from '../shared/product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  product:Product;
  comments:Comment[];
  newRating:number=5;
  newComment:string="";
  isCommentHidden=true;
  constructor( 
    private routteInfo:ActivatedRoute,
    private protectService:ProductService
  ) { }

  ngOnInit() {
    let productId=this.routteInfo.snapshot.params['prodId'];
    this.product=this.protectService.getProduct(productId);
    this.comments=this.protectService.getCommentsForProductId(productId);
  }
  addComment(){
    let comment=new Comment(0,this.product.id,new Date().toISOString(),'XXX',this.newRating,this.newComment);
    this.comments.unshift(comment);
    let sum=this.comments.reduce((sum,comment)=>sum+comment.rating,0)/this.comments.length;
    this.product.rating=sum;
    this.newComment=null;
    this.newRating=5;
    this.isCommentHidden=true;
  }
  changRating(e){
    this.newRating=e;
  }

}
