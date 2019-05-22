import { Component, OnInit, Input } from '@angular/core';
import { supplier } from '../models/supplier';

@Component({
  selector: 'app-supplier-list-card',
  templateUrl: './supplier-list-card.component.html',
  styleUrls: ['./supplier-list-card.component.scss']
})
export class SupplierListCardComponent implements OnInit {

  @Input() items: supplier[] = [];
  constructor() { }

  ngOnInit() {
  }

}
