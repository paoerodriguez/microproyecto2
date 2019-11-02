import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import { DetallepeliculaComponent } from './detallepelicula/detallepelicula.component';
import { ReservarComponent } from './reservar/reservar.component';

const routes: Routes = [
  { path: 'Home', component: HomeComponent },
  { path: 'Admin', component: AdminComponent },
  { path: 'Detalle Pelicula', component: DetallepeliculaComponent },
  { path: 'Reservar', component: ReservarComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
