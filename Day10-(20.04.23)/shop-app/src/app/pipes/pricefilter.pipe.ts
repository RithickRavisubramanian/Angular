import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pricefilter'
})
export class PricefilterPipe implements PipeTransform {

  transform(products: any, min_v: number, max_v:number): any {
 
    return products.filter((x:any)=>(parseInt(x.price)<=max_v && parseInt(x.price)>=min_v))
  }
}
