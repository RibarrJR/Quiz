import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { ComidaComponent } from './questions/comida/comida.component';
import { FamiliaComponent } from './questions/familia/familia.component';
import { GeralComponent } from './questions/geral/geral.component';
import { MusicaComponent } from './questions/musica/musica.component';
import { SurpresaComponent } from './questions/surpresa/surpresa.component';


const routes: Routes = [
  { path: '', redirectTo: 'questions', pathMatch: 'full' },
  { path: 'familia', component: FamiliaComponent },
  { path: 'musica', component: MusicaComponent },
  { path: 'comida', component: ComidaComponent },
  { path: 'geral', component: GeralComponent  },
  { path: 'surpresa', component: SurpresaComponent  },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
