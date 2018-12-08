import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InfoComponent } from './info/info.component';
import { CalculatorComponent } from './calculator/calculator.component';

const routes: Routes = [
  { path: '', component: InfoComponent },
  { path: 'calculator', component: CalculatorComponent }
];
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
  
})
export class AppRoutingModule { }
