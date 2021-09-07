import { Component, OnInit } from '@angular/core';
import { trigger, state, animate, animation, style } from '@angular/animations';
import { GlobalService } from 'src/app/services/global.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],

})
export class HomeComponent implements OnInit {


  public marca: any;
  public color: any;
  public modelo: any;
  public precio: any;
  public img: any;
  searchPipe = '';
  showTheMenu = false;
  searchCar = true;
  add = false;


  public text: string = '';


  public styles: any;
  numSelected: number = 0;
  constructor(public globalService: GlobalService) {

   
    this.text = 'Rentar';

  }

  ngOnInit(): void {
  }




  showMenu() {

    if (this.showTheMenu === false)
      this.showTheMenu = true;

    else if (this.showTheMenu === true)
      this.showTheMenu = false;


  }


  showSearch() {
    this.searchCar = true;
    this.add = false;
    this.showTheMenu = false
  }

  showAdd() {
    this.searchCar = false;
    this.add = true;
    this.showTheMenu = false;
  }



  Agregar() {

    this.globalService.addCar(this.img, this.marca, this.color, this.modelo, this.precio);

  }

  select(id: number) {
    this.numSelected = id
  

  }

}
