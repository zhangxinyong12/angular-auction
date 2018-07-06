import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'multipl'
})
export class MultiplPipe implements PipeTransform {

  transform(value: number, args?: number): number {
    if(!args) args=1;
    return value*args;
  }

}
