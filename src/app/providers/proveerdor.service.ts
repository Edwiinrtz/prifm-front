import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProveerdorService {

  constructor(private http:HttpClient ) { }

  obtenerEgresos=()=> { return this.http.post('http://localhost:8001/query',{
    type:0
  })}
  obtenerIngresos=()=> { return this.http.post('http://localhost:8001/query',{
    type:1
  })}

  crearMovimiento(info){
    console.log("HELOW")
    this.http.post("http://localhost:8001/new",
    info).subscribe(
      (data) =>{console.log(data);return data;}
    )
  }
}
