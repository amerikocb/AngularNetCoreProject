import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { CustomerService } from './customer.service';
import { Customer } from '../models/customer';
import {MatDialog} from '@angular/material';
import { NewCustomerComponent } from '../new-customer/new-customer.component';
import { EditCustomerComponent } from '../edit-customer/edit-customer.component';
import { DetailCustomerComponent } from '../detail-customer/detail-customer.component';
import { Store } from '@ngrx/store';
import { LoadData } from '../state/actions/customer-actions';
import { Observable } from 'rxjs';
import { getCustomerItems, getIsLoading, getNumberOfRecords } from '../state/reducers/index';


@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.scss'],
  // providers: [CustomerService],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CustomerListComponent implements OnInit {

  customers$: Observable<Customer[]> = this.store.select(getCustomerItems);
  isLoading$: Observable<boolean> = this.store.select(getIsLoading);
  numberOfRecords$: Observable<number> = this.store.select(getNumberOfRecords);
  pageSizeOptions: number[] = [12, 16, 20];
  pageSize: number = 12;
  pageIndex: number = 0;
  
  constructor(private customerService: CustomerService, public dialog: MatDialog, 
    private ref: ChangeDetectorRef, private store:Store<any>) {
    // this.getCustomer(1, this.pageSize);
   }

  ngOnInit() {
    this.store.dispatch(new LoadData(1, this.pageSize));
  }

  getCustomer(page: number, rows: number):void{
    this.store.dispatch(new LoadData(page,rows));
    // this.isLoading = true;
    // this.customerService.getCustomerList(page, rows)
    // .subscribe(
    //   response => {
    //     // this.customers = response;
    //     this.numberOfRecords = response[0].totalRecords;
    //     this.isLoading = false;
    //     this.ref.markForCheck();
    //   }
    // );
  }
  changePage(event: any): void{
    this.getCustomer(event.pageIndex + 1, event.pageSize)
  }

  newCustomer(): void{
    const dialogRef = this.dialog.open(NewCustomerComponent, {
      panelClass: '.new-customer-modal-dialog'
    });

    dialogRef.afterClosed().subscribe(result => {
      this.getCustomer(1, 10);
    });
  }

  editCustomer(id:number): void{
    const dialogRef = this.dialog.open(EditCustomerComponent, {
      panelClass: '.new-customer-modal-dialog',
      data: {id: id}
    });

    dialogRef.afterClosed().subscribe(result => {
      this.getCustomer(1, 10);
    });
  }
  viewDetails(id:number){
    const dialogRef = this.dialog.open(DetailCustomerComponent, {
      panelClass: '.new-customer-modal-dialog',
      data: {id: id}
    });

    dialogRef.afterClosed().subscribe(result => {
      this.getCustomer(1, 12);
    });
  }
}
