import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { RouterModule } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
import { TableViewComponent } from './table-view/table-view.component';
import { NgxDatatableModule } from "@swimlane/ngx-datatable";
import { SwitchViewComponent } from './switch-view/switch-view.component';
import { MaterialModule } from '../material.module';
import { SpinnerComponent } from './spinner/spinner.component';

@NgModule({
  declarations: [NavBarComponent, NotFoundComponent, TableViewComponent, SwitchViewComponent, SpinnerComponent],
  imports: [
    CommonModule, 
    RouterModule, 
    NgxDatatableModule,
    MaterialModule
  ],
  exports: [
    NavBarComponent,
    TableViewComponent,
    NotFoundComponent,
    SwitchViewComponent,
    SpinnerComponent
  ]
  // declarations: [NavBarComponent]
})
export class SharedModule { }
