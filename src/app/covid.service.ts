import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Dados } from './dados.model';



@Injectable({
  providedIn: 'root'
})
export class CovidService {

  public covidURL = 'https://xx9p7hp1p7.execute-api.us-east-1.amazonaws.com/prod/PortalGeralApi';

  constructor(private http: HttpClient) { }

  

  public getDados() {
    return this.http.get<any>(`${this.covidURL}`);
  }




}


