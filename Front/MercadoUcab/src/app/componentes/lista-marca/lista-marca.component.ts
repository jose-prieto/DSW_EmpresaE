import {Component, Input, OnInit} from '@angular/core';
import {Marca} from '../../models/marca';
import {MarcaService} from '../../services/marca.service';
import {ActivatedRoute, Router} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-lista-marca',
  templateUrl: './lista-marca.component.html',
  styleUrls: ['./lista-marca.component.css']
})
export class ListaMarcaComponent implements OnInit {

  Marca: Marca[] = [];
  _id = this.actRoute.snapshot.params['_id'];
  @Input() marcaData = {_id: 0, nombre: '', estado: ''};

  formMarca: FormGroup;
  namePattern: any = /^[A-Za-z0-9\s]+$/;


  // tslint:disable-next-line:variable-name
  constructor(
    public marcaService: MarcaService,
    public actRoute: ActivatedRoute,
    public router: Router,
    private formBuilder: FormBuilder
  ) {
    this.createForm();
  }


  ngOnInit(): void {
    this.loadMarca();
  }

  loadMarca(): void {
    this.marcaService.getMarcas().subscribe(data => {
      this.Marca = data;
    });
  }

  deleteMarca(id) {
    this.marcaService.deleteMarca(id).subscribe(data => {
      this.loadMarca();
    });
  }

  updateMarca(){
    this.marcaService.updateMarca(this.marcaData._id, this.marcaData).subscribe(data => {
    });
  }

  editar(marca){
    this.marcaData = marca;
  }

  /// Validacion de Datos
  get nombreMarca(){
    return this.formMarca.get('nombreMarca');
  }

  get estadoMarca(){
    return this.formMarca.get('estadoMarca');
  }


  createForm(){
    this.formMarca = this.formBuilder.group({
      nombreMarca: ['', [Validators.pattern(this.namePattern), Validators.required]],
      estadoMarca: ['', Validators.required],
    });
  }
}
