import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpHeaders } from '@angular/common/http';
import { WsServiceService } from './shared/ws-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit{
  title = 'app';
  public dataSource:Observable<any>;
  public products:Array<any>=[];
  constructor(
    private http:HttpClient,
    private wsService:WsServiceService
  ){
    const url="http://localhost:8000/api/product/2";
    let myHeaders:HttpHeaders=new HttpHeaders({
      'Authorization': 'my-auth-token',
      // 'Origin':'http://localhost:8000',
      // 'Access-Control-Allow-Origin':'*'
      
    });
    this.dataSource=this.http.get(url,);
  }
  ngOnInit(){
    this.dataSource.subscribe((data)=>{
      console.log(data)
    });
    const url="ws://localhost:8989"
    this.wsService.createObservableSocket(url).subscribe(
      data=>console.log(data),
      err=>console.log(err),
      ()=>console.log('ws结束')
    );
    setTimeout(()=>{
      this.sendMessageToServer()
    },2000)
  }
  sendMessageToServer(){
    this.wsService.sendMessage('客户端发送数据');
  }
}
