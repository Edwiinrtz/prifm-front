import { Component, OnInit } from '@angular/core';
import { ProveerdorService } from '../providers/proveerdor.service';

@Component({
  selector: 'app-ingresos',
  templateUrl: './ingresos.page.html',
  styleUrls: ['./ingresos.page.scss'],
})
export class IngresosPage implements OnInit {

  ingresos: any
  totalingresos = 0
  constructor(public proveedor: ProveerdorService) { }

  ngOnInit() {
    this.proveedor.obtenerIngresos().subscribe(
      (data)=>{
        Object.values(data).map(x=>{
          this.totalingresos+=x.value
        })
        this.ingresos = data;
          
        })      
  }

}
