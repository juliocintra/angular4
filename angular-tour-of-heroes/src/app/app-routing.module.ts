import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {HeroesComponent} from './heroes/heroes.component'
import {DashboardComponent} from "./dashboard/dashboard.component";
import {HeroDetailComponent} from "./hero-detail/hero-detail.component";

const routes: Routes = [
  {path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  {path: 'heroes', component: HeroesComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'detail/:id', component: HeroDetailComponent},
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes) // ouve as alterações de localização(rota) do navegador
                                 // executa a navegação inicial com base na URL
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule {
}
