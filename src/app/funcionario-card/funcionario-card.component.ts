import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-funcionario-card',
  templateUrl: './funcionario-card.component.html',
  styleUrls: ['./funcionario-card.component.css'],
  styles: [`
  * {
  font-size: 25px;
  font-family: "Open Sans"
  }
  `]

})
export class FuncionarioCardComponent {

  @Input('obj') funcionario: any;

  getEstilosCartao() {
    return {
      'border-width.px': this.funcionario.id,
      backgroundColor: this.funcionario.id % 2 === 0 ? 'lightblue' : 'lightgreen'

    };
  }



}
