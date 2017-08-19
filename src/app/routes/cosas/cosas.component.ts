import { Component, OnInit } from '@angular/core';
import { Busqueda } from "./-data/busqueda.model";

@Component({
  selector: 'cosas-cosas',
  templateUrl: './cosas.component.html',
  styleUrls: ['./cosas.component.css']
})
export class CosasComponent implements OnInit {

  public busqueda: Busqueda;

  constructor() { }

  ngOnInit() {
    this.busqueda = new Busqueda('');
  }
  
  funcionCallback(){
    console.log("Valos de Busqueda->", this.busqueda.value );
  }
}
