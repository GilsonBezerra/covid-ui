import { Component, OnInit } from '@angular/core';
import { CovidService } from './covid.service';
import { Dados } from './dados.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  tituloCasos = 'Casos';
  tituloObitos = 'Óbitos';

  public dados: Dados;
  
  public qualquer: boolean = false;
  
  constructor(private covidService: CovidService) {
  } 
  
  ngOnInit() {
    console.log(this.dados);
    this.buscarDados();
  }

  public buscarDados() {

    this.covidService.getDados()
      .subscribe(dados => {
        console.log(dados);
        this.dados.confirmados.total = dados.confirmados.total;

        setTimeout(() => {
          this.qualquer = true;
          
        }, 1000);
      });
  }

  public atualizar() {
    location.reload();
  }




}
