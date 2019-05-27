import { Injectable } from "@angular/core";
import { Actions, Effect, ofType } from '@ngrx/effects';
import { LoadData, SupplierActionsTypes, LoadDataCompleted } from '../actions/supplier-actions';
import { switchMap, map } from 'rxjs/operators';
import { SupplierService } from '../../supplier.service';

@Injectable()
export class SupplierEffects{
    constructor(private customerService: SupplierService, private action$: Actions){

    }

    @Effect()
    initLoad$ = this.action$.pipe(
        ofType<LoadData>(SupplierActionsTypes.LoadData),
        switchMap(action => this.customerService.getSupplierList(action.page, action.rows, action.searchTerm)),
        map(items => new LoadDataCompleted(items))
    )
}