import { Component, OnInit, ViewChild, TemplateRef, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import { SupplierService } from './supplier.service';
import { SwitchViewComponent } from '../shared/switch-view/switch-view.component';
import { supplier } from './models/supplier';
import { FormControl } from '@angular/forms';
import { debounceTime, distinctUntilChanged, filter } from 'rxjs/operators';

@Component({
  selector: 'app-supplier-container',
  templateUrl: './supplier-container.component.html',
  styleUrls: ['./supplier-container.component.scss'],
  providers: [SupplierService]
})
export class SupplierContainerComponent implements OnInit, AfterViewInit {

  items: supplier[] = [];
  @ViewChild("cardViewTemplate") private cardViewTemplate: TemplateRef<any>;
  @ViewChild("tableViewTemplate") private tableViewTemplate: TemplateRef<any>;
  templates: Map<string, TemplateRef<any>> = new Map<string, TemplateRef<any>>();
  defaultTemplate: string;
  searchControl: FormControl = new FormControl();
  isVisible: boolean = false;

  constructor(private servicio: SupplierService, private ref: ChangeDetectorRef) { }

  ngOnInit() {
    this.defaultTemplate = SwitchViewComponent.CARD_KEY;
    this.getSuppliers(1, 10);
    this.searchControl.valueChanges.pipe(debounceTime(500), distinctUntilChanged()).subscribe(val =>{
      this.getSuppliers(1, 10, val);
      // console.log(val);
      
    });
  }

  ngAfterViewInit(): void {
    this.templates.set(SwitchViewComponent.CARD_KEY, this.cardViewTemplate);
    this.templates.set(SwitchViewComponent.TABLE_KEY, this.tableViewTemplate);
    this.ref.detectChanges();
  }

  getSuppliers(page:number, rows:number, searchTerm: string = ''):void{
    this.isVisible = true;
    this.servicio.getSupplierList(page, rows, searchTerm)
    .subscribe(response =>{
      this.items = response;
      this.isVisible = false;
    });
  }

}
