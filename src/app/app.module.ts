import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ManualMovementInputFormComponent } from './components/manual-movement-input-form/manual-movement-input-form.component';
import { ManualMovementDataTableComponent } from './components/manual-movement-data-table/manual-movement-data-table.component';

import { ManualMovementService } from './services/manual-movement.service';
import { ProductService } from './services/product.service';
import { ProductCosifService } from './services/product-cosif.service';

@NgModule({
  declarations: [
    AppComponent,
    ManualMovementInputFormComponent,
    ManualMovementDataTableComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [ManualMovementService,ProductService,ProductCosifService],
  bootstrap: [AppComponent]
})
export class AppModule { }
