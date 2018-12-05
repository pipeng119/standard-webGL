import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgZorroAntdModule, NZ_I18N, zh_CN } from 'ng-zorro-antd';
import { registerLocaleData } from '@angular/common';
import { CodemirrorModule  } from "ng2-codemirror"

import zh from '@angular/common/locales/zh';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import { SandBoxComponent } from './sand-box/sand-box.component';
import { SecondDevFileComponent } from './second-dev-file/second-dev-file.component';

registerLocaleData(zh);

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    SandBoxComponent,
    SecondDevFileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    NgZorroAntdModule,
    CodemirrorModule,
  ],
  providers: [{ provide: NZ_I18N, useValue: zh_CN }],
  bootstrap: [AppComponent]
})
export class AppModule { }
