import { Component, OnInit ,Input, Output,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-stars',
  templateUrl: './stars.component.html',
  styleUrls: ['./stars.component.css']
})
export class StarsComponent implements OnInit {
  @Input () rating:number=0;
  @Output() ratingChange:EventEmitter<number>=new EventEmitter();
  @Input()
  private readonly:boolean=true;
  private stars:Array<boolean>=[]
  constructor() { }

  ngOnInit() {
    this.stars=[];
    for(let i=1;i<=5;i++){
      this.stars.push(i>this.rating)
    }
  }
  changStars(i){
    if(!this.readonly){
      this.rating=i+1;
      this.ngOnInit();
      this.ratingChange.emit(this.rating)
    }
  }

}
