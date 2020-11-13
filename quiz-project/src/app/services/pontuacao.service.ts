import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PontuacaoService {

  pontos: BehaviorSubject<number>;
  constructor() { }
  setPontos(p: BehaviorSubject<number>) {
    this.pontos = p;
  }

  acertou() {
    this.pontos.next(this.pontos.value+1);
  }
  errou() {
    this.pontos.next(this.pontos.value-1);
  }
}
