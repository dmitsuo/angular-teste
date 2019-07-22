import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-teste';
  nome = 'Whatever';

  adicionar(nome: string) {
    this.nome = nome;

  }

}
