import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ConfirmPage } from '../other-new-place/other-new-place'

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  constructor(public navCtrl: NavController) {

  }
  onLoadConfirmPage() {
    this.navCtrl.push(ConfirmPage);
}


}
