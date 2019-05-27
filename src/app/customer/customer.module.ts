import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { CustomerRoutingModule } from './customer-routing.module';
import { NewCustomerComponent } from './new-customer/new-customer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditCustomerComponent } from './edit-customer/edit-customer.component';
import { DetailCustomerComponent } from './detail-customer/detail-customer.component';
import { MaterialModule } from '../material.module';
import { SharedModule } from '../shared/shared.module';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { reducers } from './state/reducers/index';
import { CustomerEffects } from './state/effects/customer-efects';
import { CustomerService } from './customer-list/customer.service';

@NgModule({
  declarations: [CustomerListComponent, NewCustomerComponent, EditCustomerComponent, DetailCustomerComponent], 
  entryComponents: [NewCustomerComponent, EditCustomerComponent, DetailCustomerComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    CustomerRoutingModule,
    MaterialModule,
    SharedModule,
    StoreModule.forFeature("customer", reducers),
    EffectsModule.forFeature([CustomerEffects])
  ],
  providers: [CustomerService]
})
export class CustomerModule { }
