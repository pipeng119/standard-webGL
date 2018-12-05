import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Example } from '../model/Example';
@Component({
  selector: 'app-sand-box',
  templateUrl: './sand-box.component.html',
  styleUrls: ['./sand-box.component.scss']
})
export class SandBoxComponent implements OnInit {

  jsCode: any = "";

  htmlCode: any = ""

  cmOptions: any = '';

  editFlag: number;
  exampleList: Array<Example> = [
    {
      id: 1,
      background: "red"
    },
    {
      id: 2,
      background: "blue"
    },
    {
      id: 3,
      background: "yellow"
    },
  ];
  // urlInfo = 'assets/demo.html';

  @ViewChild('frame')
  frameElement: ElementRef;

  constructor() {
    this.editFlag = 1;
    this.cmOptions = {
      theme: 'monokai',
      styleActiveLine: true,
      mode: 'javascript',
      lineNumbers: true,
      tabSize: 10,
      // readOnly:"nocursor",
      smartIndent: true,
    }
  }

  ngOnInit() {
  }

  run() {
    console.log(this.jsCode, this.htmlCode)
    // console.log(1);
    // console.log(this.frameElement.nativeElement.contentWindow.document);
    let frameWindow = this.frameElement.nativeElement.contentWindow;
    let fromDocument = frameWindow.document;
    fromDocument.writeln(`<script>${this.jsCode}</script>`)
  }

}
