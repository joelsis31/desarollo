import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { InicioComponent } from './inicio/inicio.component';
import { ClientesComponent } from './clientes/clientes.component';
import { EmpleadosComponent } from './empleados/empleados.component';
import { VisitasComponent } from './visitas/visitas.component';
import { SVisitasComponent } from './s-visitas/s-visitas.component';
import { ReportesComponent } from './reportes/reportes.component';
import { ConfiguracionesComponent } from './configuraciones/configuraciones.component';
import { ConfRolesComponent } from './conf-roles/conf-roles.component';
import { ConfStatesURComponent } from './conf-states-u-r/conf-states-u-r.component';
import { ConfStatesVisComponent } from './conf-states-vis/conf-states-vis.component';

const routes: Routes = [
  {path: '', redirectTo: '/auth', pathMatch: 'full'},
  {path: 'auth', component: LoginComponent },
  {path: 'Inicio', component: InicioComponent},
  {path: 'agregarClientes', component: ClientesComponent},
  {path: 'aggEmpleados', component: EmpleadosComponent},
  {path: 'programarVisitas', component: VisitasComponent},
  {path: 'solicitudVisitas', component: SVisitasComponent},
  {path: 'reportes', component:ReportesComponent},
  {path: 'configuraciones', component:ConfiguracionesComponent},
  {path: 'conf-roles', component:ConfRolesComponent},
  {path: 'conf-states-ur', component:ConfStatesURComponent},
  {path: 'conf-states-vis', component:ConfStatesVisComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes , { useHash: true } )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
