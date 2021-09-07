import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(value: any, args: string): any {
    let array = []
    if (args.length < 1) return value
    else {
      for (const car of value) {
        if (car.marca.toLowerCase().indexOf(args.toLowerCase()) > -1) {

          array.push(car);
        }

      }
    }
    return array
    // const array =[];

    // for(const car of value){

    //   if(car.marca.toLowerCase().indexOf(args.toLowerCase()) > -1){
    //     console.log('si');

    //     array.push(car);

    //   }

    // }

    // return array;

  }

}
