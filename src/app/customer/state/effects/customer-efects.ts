import { Injectable } from "@angular/core";
import { CustomerService } from '../../customer-list/customer.service';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { LoadData, CustomerActionsTypes, LoadDataCompleted } from '../actions/customer-actions';
import { switchMap, map } from 'rxjs/operators';

@Injectable()
export class CustomerEffects{
    constructor(private customerService: CustomerService, private action$: Actions){

    }

    @Effect()
    initLoad$ = this.action$.pipe(
        ofType<LoadData>(CustomerActionsTypes.LoadData),
        switchMap(action => this.customerService.getCustomerList(action.page, action.rows)),
        map(items => new LoadDataCompleted(items))
    )
}