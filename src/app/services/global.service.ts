import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {


  public arrayCars:any = [];
  searchPipe='';
  
 
  constructor() { }


  addCar(img:any,marca:any,color:any,modelo:any,precio:any){
    let random = Math.floor(Math.random()*(100+1))
    const newCar = {
      
      id:random,
      img,
      marca,
      color,
      modelo,
      precio,
      

    }


   
    this.arrayCars.unshift(newCar);

  }


  CarId(id:any){
    this.arrayCars.indexOf((value:any) => value===id);


  }


 
}
