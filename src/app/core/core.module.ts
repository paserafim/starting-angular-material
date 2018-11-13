import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularMaterialModule } from './../angular-material/angular-material.module';
import { ToolbarComponent } from './components/toolbar/toolbar.component';

@NgModule({
  declarations: [ToolbarComponent],
  imports: [
    CommonModule,
    AngularMaterialModule
  ],
  exports: [
    ToolbarComponent
  ]
})
export class CoreModule { }
