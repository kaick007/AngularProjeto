import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Departamento } from './Departamento';

const httpOptions = {
headers: new HttpHeaders({
    'Content-Type' : 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class DepartamentoService {
  url = 'https://localhost:7078/Departamento';

  constructor(private http: HttpClient) { }

  Listar(): Observable<Departamento[]>{
    return this.http.get<Departamento[]>(this.url);
  }


  ListarPeloId(Id: number): Observable<Departamento>{
    const apiUrl = `${this.url}/${Id}`;
    return this.http.get<Departamento>(apiUrl);
  }

  CadastarDepartamento(departamento: Departamento) : Observable<any>{
    return this.http.post<Departamento>(this.url, departamento, httpOptions);
  }

  EditarDepartamento(departamento: Departamento) : Observable<any>{
    return this.http.put<Departamento>(this.url, departamento, httpOptions);
  }
  DeletarDepartamento(Id: number ) : Observable<any>{
    const apiUrl = `${this.url}/${Id}`;
    return this.http.delete<number>(apiUrl, httpOptions);
  }
}
