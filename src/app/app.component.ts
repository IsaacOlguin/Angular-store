import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'store';
  developerVorname = 'Isaac';

  items = ["isaac", "olguin"];

  obst = ["Apfel", "Birne", "Kirsche", "Wassermelon", "Banane"];

  addItem() {
    this.obst.push("ein neues Obst");
  }

  deleteItem(index: number) {
    this.obst.splice(index, 1);
  }
}
