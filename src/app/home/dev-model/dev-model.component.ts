import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dev-model',
  templateUrl: './dev-model.component.html',
  styleUrls: ['./dev-model.component.scss']
})
export class DevModelComponent implements OnInit {

  devList: Array<string> = [];

  constructor() {
    this.devList = ['http://placehold.it/200x300','http://placehold.it/200x300','http://placehold.it/200x300','http://placehold.it/200x300']
  }

  ngOnInit() {
  }

}
