import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
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
  tabs = [
    {
      active: true,
      name: 'Tab 1',
      icon: 'apple'
    },
    {
      active: false,
      name: 'Tab 2',
      icon: 'android'
    }
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
    let frameWindow = this.frameElement.nativeElement.contentWindow;
    let fromDocument = frameWindow.document;
    console.log("fromDocument",fromDocument)
    // fromDocument.documentElement.innerHTML = this.htmlCode;

    let script = document.createElement("script");
    script.type = "text/javascript";
    script.innerHTML = this.jsCode;
    fromDocument.body.appendChild(script)


  }

}
