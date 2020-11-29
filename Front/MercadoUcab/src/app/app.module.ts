// Componentes propios de angular
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { SidebarModule } from 'ng-sidebar';

// Componentes
import { AppComponent } from './app.component';
import { LoginComponent } from './componentes/login/login.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { SidebarComponent } from './componentes/sidebar/sidebar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RegistrarseComponent } from './componentes/login/registrarse/registrarse.component';
import { RecuperacionComponent } from './componentes/login/recuperacion/recuperacion.component';
import { ListaComponent } from './componentes/lista/lista.component';
import { FormularioComponent } from './componentes/formulario/formulario.component';
import { AdminComponent } from './modulos/admin/admin.component';
import { ClienteComponent } from './modulos/cliente/cliente.component';
import { UsuarioComponent } from './modulos/usuario/usuario.component';
import { AnalistaComponent } from './modulos/analista/analista.component';
import { FormClientesComponent } from './componentes/form-clientes/form-clientes.component';
import { MainClienadminComponent } from './componentes/main-clienadmin/main-clienadmin.component';


// Services
import { UsuarioService } from './services/usuario.service';
import { FormMarcaComponent } from './componentes/form-marca/form-marca.component';
import { ListaMarcaComponent } from './componentes/lista-marca/lista-marca.component';
import { AdminService } from './services/admin.service';
import { ListaPreguntasComponent } from './componentes/lista-preguntas/lista-preguntas.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavbarComponent,
    SidebarComponent,
    RegistrarseComponent,
    RecuperacionComponent,
    ListaComponent,
    FormularioComponent,
    AdminComponent,
    ClienteComponent,
    UsuarioComponent,
    AnalistaComponent,
    FormClientesComponent,
    FormMarcaComponent,
    ListaMarcaComponent,
    MainClienadminComponent,
    MainClienadminComponent,
    ListaPreguntasComponent,
  ],
  imports: [
    BrowserModule,
    SidebarModule.forRoot(),
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,

  ],
  providers: [
    UsuarioService,
    AdminService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
