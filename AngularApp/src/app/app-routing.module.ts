import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdcrimComponent } from './adcrim/adcrim.component';
import { EmployeeComponent } from "./employee/employee.component";
import { FairComponent } from './adcrim/fair/fair.component';
import { SafetyComponent } from './adcrim/safety/safety.component';
import { AppComponent } from './app.component';
import { PassComponent } from './adcrim/pass/pass.component';
import { RmmtravelsComponent } from './adcrim/rmmtravels/rmmtravels.component';
import { EmployeeService } from './shared/employee.service';
import { Employee } from './shared/employee.model';




const routes: Routes = [
   
   { path: '', redirectTo: '/app', pathMatch: 'full' },
   { path: 'adcrim', component: AdcrimComponent },
   { path: 'employee', component: EmployeeComponent },
   { path: 'fair', component: FairComponent },
   { path: 'safety', component: SafetyComponent },
   { path: 'pass', component: PassComponent },
   { path: 'rmmtravels', component: RmmtravelsComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
