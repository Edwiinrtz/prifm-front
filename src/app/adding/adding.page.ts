import { Component, OnInit } from '@angular/core';

import { ProveerdorService } from '../providers/proveerdor.service';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-adding',
  templateUrl: './adding.page.html',
  styleUrls: ['./adding.page.scss'],
})
export class AddingPage implements OnInit {
  
  informacion = {
    name:'',
    description:'',
    value:0,
    type:-1
  }
  info:Object
  status
  constructor(public proveedor:ProveerdorService, public modalCtrl: ModalController) { }
  
  ngOnInit() {
  }
  

  async dismiss() {
    this.modalCtrl.dismiss({
      'dismissed': true
    });
    
  
  }
  async newMov(form){
    this.info={
      'name':form.value.name,
      'description':form.value.description,
      'value':form.value.value,
      'type':parseInt(form.value.type)
    }
    this.status = await this.proveedor.crearMovimiento(this.info)
    this.modalCtrl.dismiss({
      'dismissed': true
    });
  }

}
