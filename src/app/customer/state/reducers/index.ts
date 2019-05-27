import * as fromCustomer from "../reducers/customer-reducer";
import { ActionReducerMap, createFeatureSelector, createSelector } from '@ngrx/store';

export interface CustomerState{
    customer: fromCustomer.State;
}

export const reducers: ActionReducerMap<CustomerState> = {
    customer: fromCustomer.CustomerReducer
};

//Feeture module state composition

export const getCustomerModuleState = createFeatureSelector<CustomerState>("customer");
export const getCustomerState = createSelector(getCustomerModuleState, state => state.customer);
export const getCustomerItems = createSelector(getCustomerState, fromCustomer.getCustomerItems);
export const getIsLoading = createSelector(getCustomerState, fromCustomer.getIsLoading);
export const getNumberOfRecords = createSelector(getCustomerState, fromCustomer.getNumberOfRecords);