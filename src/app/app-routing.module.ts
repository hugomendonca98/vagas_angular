import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { VagaComponent } from './vaga/vaga.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'vagas', component: VagaComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
