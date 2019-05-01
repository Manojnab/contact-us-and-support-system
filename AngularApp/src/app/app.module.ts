import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdcrimComponent } from './adcrim/adcrim.component';
import { EmployeeComponent } from "./employee/employee.component";
import { FairComponent } from './adcrim/fair/fair.component';
import { SafetyComponent } from './adcrim/safety/safety.component';
import { PassComponent } from './adcrim/pass/pass.component';
import { RmmtravelsComponent } from './adcrim/rmmtravels/rmmtravels.component';
import { EmployeeService } from './shared/employee.service';
import { Employee } from './shared/employee.model';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    AdcrimComponent,
    EmployeeComponent,
    FairComponent,SafetyComponent,PassComponent,RmmtravelsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,FormsModule,HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
