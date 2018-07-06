import { Component, OnInit } from '@angular/core';
import { ProductService, Product } from '../shared/product.service';
import { FormControl } from '@angular/forms';
import { filter, map ,debounceTime} from 'rxjs/operators';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  public products:Product[];
  private keyword:string;
  public titleFilter=new FormControl();
  constructor(
    private productService:ProductService
  ) {
    this.titleFilter.valueChanges
      .pipe(
        debounceTime(500)
      )
      .subscribe(
        value=>this.keyword=value
      )
   }

  ngOnInit() {
    this.products=this.productService.getProducts();
  }

}
