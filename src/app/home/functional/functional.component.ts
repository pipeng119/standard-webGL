import { Component, OnInit } from '@angular/core';
import { FunctionalList } from '../../model/FunctionalList';

@Component({
  selector: 'app-functional',
  templateUrl: './functional.component.html',
  styleUrls: ['./functional.component.scss']
})
export class FunctionalComponent implements OnInit {

  funcList: Array<FunctionalList> = [];

  constructor() { 
    this.funcList = [
      {
        imgUrl: 'http://placehold.it/100x100',
        title: "产品特性",
        dec: "将 Sketch 智能化解析输出到我们的平台。如果检测出同一个图片，那么这张图片会被认定为同一张图片。新版本会覆盖之前的版本，可以去图片历史中查看以往历史记录。",
        moreUrl: '/',
      },
      {
        imgUrl: 'http://placehold.it/100x100',
        title: "产品特性",
        dec: "将 Sketch 智能化解析输出到我们的平台。如果检测出同一个图片，那么这张图片会被认定为同一张图片。新版本会覆盖之前的版本，可以去图片历史中查看以往历史记录。",
        moreUrl: '/',
      },
      {
        imgUrl: 'http://placehold.it/100x100',
        title: "产品特性",
        dec: "将 Sketch 智能化解析输出到我们的平台。如果检测出同一个图片，那么这张图片会被认定为同一张图片。新版本会覆盖之前的版本，可以去图片历史中查看以往历史记录。",
        moreUrl: '/',
      },
    ]
  }

  ngOnInit() {
  }

}
