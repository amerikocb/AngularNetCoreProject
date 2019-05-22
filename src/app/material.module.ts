import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule, MatButtonModule, MatPaginatorModule, MatDialogModule, MatInputModule, MatFormFieldModule, MatTooltipModule, MatSidenavModule } from '@angular/material';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatPaginatorModule,
    MatDialogModule,
    MatInputModule,
    MatFormFieldModule,
    MatTooltipModule,
    MatSidenavModule
  ],
  exports: [
    MatCardModule,
    MatButtonModule,
    MatPaginatorModule,
    MatDialogModule,
    MatInputModule,
    MatFormFieldModule,
    MatTooltipModule,
    MatSidenavModule
  ]
})
export class MaterialModule { }
