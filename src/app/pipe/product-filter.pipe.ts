import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'productFilter'
})
export class ProductFilterPipe implements PipeTransform {

  transform(list: any[], arges?: string,keyword?:string): any {
    if(!arges||!keyword){
      return list;
    }
    return list.filter(item=>{
      let fiedlValue=item[arges];
      return fiedlValue.indexOf(keyword)>=0;
    });
  }

}
