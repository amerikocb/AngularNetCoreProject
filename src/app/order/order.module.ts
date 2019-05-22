import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderContainerComponent } from './order-container/order-container.component';
import { OrderRoutingModule } from './order-routing.module';
import { SharedModule } from '../shared/shared.module';
import { MaterialModule } from '../material.module';
import { OrderDetailComponent } from './order-detail/order-detail.component';

@NgModule({
  declarations: [OrderContainerComponent, OrderDetailComponent],
  imports: [
    CommonModule,
    OrderRoutingModule,
    SharedModule,
    MaterialModule
  ]
})
export class OrderModule { }
