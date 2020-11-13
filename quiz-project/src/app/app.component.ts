import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { PontuacaoService } from './services/pontuacao.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  public iniciado=false;

  constructor(public p: PontuacaoService,private Route:Router) {
    p.setPontos(this.SubjectPontos);
  }

  SubjectPontos = new BehaviorSubject(0);

  title = 'quiz-project';
  items = [{
    label: 'Familia',
    routerLink: 'familia'
  },
  {
    label: 'Gosto Musical',
    routerLink: 'musica'
  },
  {
    label: 'Comida',
    routerLink: 'comida'
  },
  {
    label: 'Geral',
    routerLink: 'geral'
  },
  {
    label: 'Surpresa',
    routerLink: 'surpresa'
  }
  ];
  iniciar(){
    this.iniciado=true;
    this.Route.navigate(['familia']);

  }
}
