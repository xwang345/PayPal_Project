import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NewPlacePage } from '../new-place/new-place'
// import { Other } from '../other-new-place/other-new-place'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }
  onLoadNewPlace() {
    this.navCtrl.push(NewPlacePage);
  }
  onLoadOther() {
    // this.navCtrl.push(Other);
  }
}
