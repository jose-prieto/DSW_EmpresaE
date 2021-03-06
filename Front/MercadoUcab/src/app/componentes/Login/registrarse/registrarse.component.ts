import {Component, Input, OnInit} from '@angular/core';
import {EncuestadoService} from '../../../services/encuestado.service';
import {AbstractControl, Form, FormArray, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {GeneroService} from '../../../services/genero.service';
import {OcupacionService} from '../../../services/ocupacion.service';
import {NivelSocioEconomicoService} from '../../../services/nivel-socio-economico.service';
import {LugarService} from '../../../services/lugar.service';
import {Router} from '@angular/router';
import {UsuarioService} from '../../../services/usuario.service';
import {MedioConexionService} from '../../../services/medio-conexion.service';
import {EstadoCivilService} from '../../../services/estado-civil.service';
import {NivelAcademicoService} from '../../../services/nivel-academico.service';
import {HijoService} from '../../../services/hijo.service';

@Component({
  selector: 'app-registrarse',
  templateUrl: './registrarse.component.html',
  styleUrls: ['./registrarse.component.css']
})
export class RegistrarseComponent implements OnInit {

  @Input() encuestado = {_id: 0, primerNombre: '', segundoNombre: '' , primerApellido: '', segundoApellido: '', fechaNacimiento: '', estado: '',
    estadoCivil: {_id: 0, nombre: '', estado: ''},
    nivelAcademico: {_id: 0, nombre: '', estado: ''},
    medioConexion: {_id: 0, nombre: '', estado: ''},
    genero: {_id: 0, nombre: '', estado: ''},
    ocupacion: {_id: 0, nombre: '', estado: ''},
    nivelSocioEconomico: {_id: 0, nombre: '', estado: '', descripcion: ''},
    telefono: {_id: 0, numero: 0},
    hijo: {_id: 0, fechaNacimientoHijo: '', generoHijo: ''},
    lugar:  {_id: 0, estado: '', nombre: '', tipo: '', lugar: {_id: 0, estado: '', nombre: '', tipo: '', lugar: {_id: 0, estado: '', nombre: '', tipo: '', lugar: {_id: 0, estado: '', nombre: '', tipo: ''}}}},
    usuario: {_id: 0, username: '', estado: '', clave: '', correoElectronico: ''},
  };

  tieneHijos: boolean = false;

  estadoCivil: any;
  nivelAcademico: any;
  medioConexion: any;
  genero: any;
  ocupacion: any;
  nivelSocioEconomico: any;
 
  lugar: any;
  usuario: any;
  username: any;
  clave: any;
  correoElectronico: any;
  telefono: any;

  estados: any;
  parroquias: any;
  municipios: any;
  auxEstadoID: number;
  auxMunicipioID: number;
  auxParroquiaID: number;
  cantHijos = [1, 2, 3, 4, 5, 6, 7];
  auxIterador = [];

  patronFechaNacimientoEncuestado: any = /^\d{4}-(0?[1-9]|1[012])-(0?[1-9]|[12][0-9]|3[01])$/;
  patronNombreEncuestado: any = /^[A-Za-z\s]+$/;
  patronCorreoEncuestado: any = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  patronUsernameEncuestado: any = / ^[a-zA-Z0-9]+([._]?[a-zA-Z0-9]+)*$/;
  patronClaveEncuestado: any = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
  patronTelefonoEncuestado: any = /^[0-9\s]+$/;

  // /[\(]?[\+]?(\d{2}|\d{3})[\)]?[\s]?((\d{6}|\d{8})|(\d{3}[\*\.\-]){2}\d{3}|(\d{2}[\*\.\-\s]){3}\d{2}|(\d{4}[\*\.\-\s]){1}\d{4})|\d{8}|\d{10}|\d{12}/;

  /// Reglas para el username
  /// 1. caracteres alfanumericos, guion bajo y punto.
  // 2. guion bajo y punto no puede estar al inicio o fin de la cadena.
  // 3. guion bajo y punto no pueden ir seguidos.
  // 4. solo se puede usar uno de cada uno.
  // 5. entre 8 y 20 caracteres

  // Reglas para la clave
  // 1. al menos una mayuscula
  // 2. al menos una minuscula
  // 3. al menos un numero
  // 4. al menos un caracter especial (?=.*?[#?!@$%^&*-)
  // 5. al menos 8 caracteres

  formRegistroEncuestado: FormGroup;
  hijos: FormArray;

  constructor(
    public encuestadoService: EncuestadoService,
    public estadoCivilService: EstadoCivilService,
    public nivelAcademicoService: NivelAcademicoService,
    public medioConexionService: MedioConexionService,
    public generoService: GeneroService,
    public ocupacionService: OcupacionService,
    public nivelSocioEconomicoService: NivelSocioEconomicoService,
    public hijoService: HijoService,
    public lugarService: LugarService,
    public usuarioService: UsuarioService,
    public router: Router,
    private formBuilder: FormBuilder
    ) {
    this.createForm();
  }

  ngOnInit(): void {
    this.addEstadoCivil();
    this.addNivelAcademico();
    this.addMedioConexion();
    this.addGenero();
    this.addOcupacion();
    this.addNivelSocioEconomico();
    this.addLugar();
  }

  addEncuestado(encuestado){
    this.encuestado.lugar._id = this.auxParroquiaID;
    this.encuestadoService.createEncuestado(this.encuestado).subscribe((data: {}) => {});
  }


  addEstadoCivil(){
    this.estadoCivilService.getEstadosCiviles().subscribe((EstadosCiviles: {}) => {
      this.estadoCivil = EstadosCiviles;
    });
  }

  addNivelAcademico(){
    this.nivelAcademicoService.getNivelesAcademicos().subscribe((NivelesAcademicos: {}) => {
      this.nivelAcademico = NivelesAcademicos;
    });
  }

  addMedioConexion(){
    this.medioConexionService.getMediosConexion().subscribe((MediosConexion: {}) => {
      this.medioConexion = MediosConexion;
    });
  }

  addGenero(){
    this.generoService.getGeneros().subscribe((Generos: {}) => {
      this.genero = Generos;
    });
  }

  addOcupacion(){
    this.ocupacionService.getOcupaciones().subscribe((Ocupaciones: {}) => {
      this.ocupacion = Ocupaciones;
    });
  }

  addNivelSocioEconomico(){
    this.nivelSocioEconomicoService.getNivelesSocioEconomicos().subscribe((NivelesSocioeconomicos: {}) => {
      this.nivelSocioEconomico = NivelesSocioeconomicos;
    });
  }

  addLugar(){
    this.lugarService.getLugars().subscribe((Lugares: {}) => {
      this.estados = Lugares;
    });
  }

  busquedaMunicipio(id){
    // El ID es del estado
    this.auxEstadoID = id;
    // Esta peticion se realiza para mostar todas las parroquias aasociadas al estado
    if (id > 0 ){
      this.lugarService.getMunicipio(this.auxEstadoID).subscribe((data: {}) => {
        this.municipios = data;
      });
    }

  }

  busquedaParroquia(id){
    // El ID es del estado
    this.auxMunicipioID = id;
    // Esta peticion se realiza para mostar todas las parroquias aasociadas al estado
    if (id > 0 ) {
      this.lugarService.getParroquia(this.auxMunicipioID, id).subscribe((data: {}) => {
        this.parroquias = data;
      });
    }
  }

  seleccionarParroquia(id){
    this.auxParroquiaID = id;
  }

  cargarCamposHijos(num: number): void{
    this.auxIterador = [];
    for (let i = 1; i <= num; i++) {
      this.auxIterador.push(i);
    }
  }

  get primerNombreEncuestado(){return this.formRegistroEncuestado.get('primerNombreEncuestado'); }
  get segundoNombreEncuestado(){return this.formRegistroEncuestado.get('segundoNombreEncuestado'); }
  get primerApellidoEncuestado(){return this.formRegistroEncuestado.get('primerApellidoEncuestado'); }
  get segundoApellidoEncuestado(){return this.formRegistroEncuestado.get('segundoApellidoEncuestado'); }
  get fechaNacimientoEncuestado(){return this.formRegistroEncuestado.get('fechaNacimientoEncuestado'); }
  get estadoEncuestado(){return this.formRegistroEncuestado.get('estadoEncuestado'); }
  get estadoCivilEncuestado(){return this.formRegistroEncuestado.get('estadoCivilEncuestado'); }
  get nivelAcademicoEncuestado(){return this.formRegistroEncuestado.get('nivelAcademicoEncuestado'); }
  get medioConexionEncuestado(){return this.formRegistroEncuestado.get('medioConexionEncuestado'); }
  get generoEncuestado(){return this.formRegistroEncuestado.get('generoEncuestado'); }
  get ocupacionEncuestado(){return this.formRegistroEncuestado.get('ocupacionEncuestado'); }
  get nivelSocioEconomicoEncuestado(){ return this.formRegistroEncuestado.get('nivelSocioEconomicoEncuestado'); }
  get telefonoEncuestado(){ return this.formRegistroEncuestado.get('telefonoEncuestado'); }
  get fechaNacimientoHijoEncuestado(){ return this.formRegistroEncuestado.get('fechaNacimientoHijoEncuestaod'); }
  get generoHijoEncuestado(){ return this.formRegistroEncuestado.get('generoHijoEncuestado'); }
  get lugarEncuestado(){return this.formRegistroEncuestado.get('lugarEncuestado'); }
  get usuarioEncuestado(){return this.formRegistroEncuestado.get('usuarioEncuestado'); }
  get usernameEncuestado(){return this.formRegistroEncuestado.get('usernameEncuestado'); }
  get claveEncuestado(){return this.formRegistroEncuestado.get('claveEncuestado'); }
  get correoElectronicoEncuestado(){return this.formRegistroEncuestado.get('correoElectronicoEncuestado'); }

  createForm(){
    this.formRegistroEncuestado = this.formBuilder.group({
      primerNombreEncuestado: ['', [Validators.required, Validators.pattern(this.patronNombreEncuestado)]],
      segundoNombreEncuestado: ['', [Validators.required, Validators.pattern(this.patronNombreEncuestado)]],
      primerApellidoEncuestado: ['', [Validators.required, Validators.pattern(this.patronNombreEncuestado)]],
      segundoApellidoEncuestado: ['', [Validators.required, Validators.pattern(this.patronNombreEncuestado)]],
      estadoEncuestado: ['', Validators.required],
      fechaNacimientoEncuestado: ['', [Validators.required, Validators.pattern(this.patronFechaNacimientoEncuestado)]],
      lugarEncuestado: ['', Validators.required],
      estadoCivilEncuestado: ['', Validators.required],
      nivelAcademicoEncuestado: ['', Validators.required],
      medioConexionEncuestado: ['', Validators.required],
      generoEncuestado: ['', Validators.required],
      ocupacionEncuestado: ['', Validators.required],
      nivelSocioEconomicoEncuestado: ['', Validators.required],
      fechaNacimientoHijoEncuestado: ['', [Validators.required, Validators.pattern(this.patronFechaNacimientoEncuestado)]],
      generoHijoEncuestado: ['', Validators.required],
      telefonoEncuestado: ['', [Validators.required, Validators.pattern(this.patronTelefonoEncuestado), Validators.maxLength(11)]],
      usuarioEncuestado: ['', Validators.required],
      usernameEncuestado: '',
      claveEncuestado: '',
      correoElectronicoEncuestado: ['', [Validators.required, Validators.pattern(this.patronCorreoEncuestado)]],
    });
  }

  // tslint:disable-next-line:typedef
  guardarEncuestado() {
   /* this.encuestadoService.registarEncuestado(this.encuestado)
      .subscribe(
        res => {
          console.log(res);
        },
        err => console.error(err)
      );*/
  }
}
