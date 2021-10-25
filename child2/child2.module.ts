import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ParentComponent } from '../parent.component';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports:[]
})
export class Child2Module {
  constructor()
  {
    console.log("Chld2 modules is working")
  }
 }
