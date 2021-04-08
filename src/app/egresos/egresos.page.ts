import { Component, OnInit } from '@angular/core';
import { ProveerdorService } from '../providers/proveerdor.service';

@Component({
  selector: 'app-egresos',
  templateUrl: './egresos.page.html',
  styleUrls: ['./egresos.page.scss'],
})
export class EgresosPage implements OnInit {

  egresos:any
  totalgastos = 0
  constructor(public proveedor: ProveerdorService) { }
  
  ngOnInit() {
    this.proveedor.obtenerEgresos().subscribe(data=>{
      Object.values(data).map(x=>{
        this.totalgastos+=x.value;
      })
      this.egresos = data
    })
  }

}
