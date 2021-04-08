import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProveerdorService } from '../providers/proveerdor.service';
import { IonRouterOutlet, ModalController, NavController } from '@ionic/angular';
import { AddingPage } from '../adding/adding.page';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  constructor(private httpClient: HttpClient,
    public proveedor: ProveerdorService, 
    public modalController:ModalController,
    private routerOutlet: IonRouterOutlet,
    ){}

  egresos:any;
  ingresos:any;
  data: any
  ngOnInit(){
    this.proveedor.obtenerEgresos()
    .subscribe(
      (data:any) =>{ this.egresos = data}
    );
    this.proveedor.obtenerIngresos()
    .subscribe(
      (data:any) =>{ this.ingresos = data}
    );
  }
  async addNewMov(){
    const modal = await this.modalController.create({
      component:AddingPage,
      cssClass:'my-custom-class',
      swipeToClose: true,
      presentingElement: this.routerOutlet.nativeEl
    });
    return modal.present();
  }
}


