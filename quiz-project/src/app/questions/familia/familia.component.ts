import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit, HostBinding } from '@angular/core';
import { Router } from '@angular/router';
import { PontuacaoService } from 'src/app/services/pontuacao.service';


@Component({
  selector: 'app-familia',
  templateUrl: './familia.component.html',
  styleUrls: ['./familia.component.css'],
  animations: [
    trigger('popOverState', [
      state('show', style({
        opacity: '1',
        backgroundColor: 'yellow'
      })),
      state('hide', style({
        opacity: '0',
        backgroundColor: 'green'
      })),
      transition('show => hide', animate('2000ms ease-out')),
      transition('hide => show', animate('4000ms ease-in'))
    ])
  ]
})
export class FamiliaComponent implements OnInit {
  question1 = true;
  question2 = false;
  question3 = false;
  question4 = false;
  primeiraTentativa = 0;
  primeiraTentativa2 = 0;
  primeiraTentativa3 = 0;
  primeiraTentativa4 = 0;

  constructor(private router: Router, public p: PontuacaoService) { }

  get stateQuestion1() {
    return this.question1 ? 'show ' : 'hide'
  }
  get stateQuestion2() {
    return this.question2 ? 'show ' : 'hide'
  }
  get stateQuestion3() {
    return this.question3 ? 'show ' : 'hide'
  }
  get stateQuestion4() {
    return this.question4 ? 'show ' : 'hide'
  }

  ngOnInit(): void {
  }

  validate(Q, N) {

    if (Q) {
      switch (N) {
        case 1:
          if (this.primeiraTentativa === 0) { this.p.acertou(); this.primeiraTentativa++ };
          this.question2 = true;
          break;
        case 2:
          if (this.primeiraTentativa2 === 0) { this.p.acertou(); this.primeiraTentativa2++ };
          this.question3 = true;
          break;
        case 3:
          if (this.primeiraTentativa3 === 0) { this.p.acertou(); this.primeiraTentativa3++ };
          this.question4 = true;
          break;
        case 4:
          if (this.primeiraTentativa4 === 0) { this.p.acertou(); this.primeiraTentativa4++ };
          this.router.navigate(['./musica']);
          break;
        default:
          break;
      }
    }
    else {
      this.p.errou();
      switch (N) {
        case 2:
          this.question2 = false;
          break;
        case 3:
          this.question3 = false;
          break;
        case 4:
          this.question4 = false;
          break;

        default:
          break;
      }
    }

  }

}
