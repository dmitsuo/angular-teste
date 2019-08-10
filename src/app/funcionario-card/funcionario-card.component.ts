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

}
