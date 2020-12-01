import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-marca',
  templateUrl: './form-marca.component.html',
  styleUrls: ['./form-marca.component.css']
})
export class FormMarcaComponent implements OnInit {

  item: any = {
    nombre: ''
  };

  constructor() { }

  ngOnInit(): void {
  }

  agregarMarca(){
    console.log('agregó marca');
  }

}