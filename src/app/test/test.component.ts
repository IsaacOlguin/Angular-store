import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {

  title = 'store';
  developerVorname = 'Isaac';

  numero = 10;

  items = ['isaac', 'olguin'];

  obst = ['Apfel', 'Birne', 'Kirsche', 'Wassermelon', 'Banane'];

  addItem() {
    this.obst.push('ein neues Obst');
  }

  deleteItem(index: number) {
    this.obst.splice(index, 1);
  }

  constructor() { }

  ngOnInit() {
  }

}
