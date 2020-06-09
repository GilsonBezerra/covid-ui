import { Component, OnInit } from '@angular/core';
import { CovidService } from './covid.service';
import { Dados } from './dados.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  tituloCasos = 'Casos';
  tituloObitos = 'Óbitos';

  public dados: Array<any>;
  
  constructor(private covidService: CovidService) {
  } 

  
  
  ngOnInit() {
    console.log(this.dados);
    this.buscarDados();
  }

  public buscarDados() {
    this.covidService.getDados()
      .subscribe(dados => this.dados = dados
      );
  }

  public atualizar() {
    location.reload();
  }




}
