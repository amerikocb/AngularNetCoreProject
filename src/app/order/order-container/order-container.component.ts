import { Component, OnInit, ViewChild, TemplateRef, ChangeDetectorRef, AfterViewInit } from '@angular/core';
import { OrderContainerService } from './order-container.service';
import { OrderList } from '../models/order-list';
import { TableViewComponent } from '../../shared/table-view/table-view.component';

@Component({
  selector: 'app-order-container',
  templateUrl: './order-container.component.html',
  styleUrls: ['./order-container.component.scss'],
  providers: [OrderContainerService]
})
export class OrderContainerComponent implements OnInit, AfterViewInit {

  numberOfRecords: number = 0;
  pageSizeOptions: number[] = [12, 16, 20];
  pageSize: number = 10;
  pageIndex: number = 0;
  items: OrderList[] = [];
  public columns: object[] = [];
  public detailColumns: object[] = [];
  @ViewChild("tableView") tableView: TableViewComponent<any>;
  @ViewChild("orderIdCellTemplate") private orderIdCellTemplate: TemplateRef<any>
  @ViewChild("orderNumberCellTemplate") private orderNumberCellTemplate: TemplateRef<any>

  constructor(private service: OrderContainerService, private ref: ChangeDetectorRef) { }

  ngOnInit() {
    this.getOrders(1, 10);
  }

  ngAfterViewInit(): void {
    this.columns = this.getColumns();
    this.detailColumns = this.getDetailColumns();
    this.ref.detectChanges();
  }

  toggleExpandRow(row){
    this.tableView.toggleExpandROw(row);
    this.ref.detectChanges();
  }

  getOrders(page:number, rows:number):void{
    this.service.getOrderList(page, rows)
      .subscribe(Response => {
        this.items = Response;
        this.numberOfRecords = Response[0].totalRecords;
      })
  }

  changePage(event: any): void{
    this.getOrders(event.pageIndex + 1, event.pageSize)
  }

  private getColumns(): object[] {
    return [
      {
        name: "Id",
        flexGrow: 0.5,
        cellTemplate: this.orderIdCellTemplate
      },
      {
        name: "Customer",
        flexGrow: 1,
        prop: "customer"
      },
      {
        name: "Total",
        flexGrow: 0.5,
        prop: "totalAmount"
      },
      {
        name: "# Order",
        flexGrow: 0.5,
        cellTemplate: this.orderNumberCellTemplate
      }
    ];
  }
  private getDetailColumns():object[] {
    return [
      {
        name: "Product",
        flexGrow: 0.5,
        prop: "productName"
      },
      {
        name: "unitPrice",
        flexGrow: 0.5,
        prop: "unitPrice"
      },
      {
        name: "quantity",
        flexGrow: 0.5,
        prop: "quantity"
      }
    ]
  }
}
