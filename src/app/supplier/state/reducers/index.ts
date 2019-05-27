import * as fromSupplier from "../reducers/supplier-reducer";
import { ActionReducerMap, createFeatureSelector, createSelector } from '@ngrx/store';

export interface SupplierState{
    supplier: fromSupplier.State;
}

export const reducers: ActionReducerMap<SupplierState> = {
    supplier: fromSupplier.SupplierReducer
};

//Feeture module state composition

export const getSupplierModuleState = createFeatureSelector<SupplierState>("customer");
export const getSupplierState = createSelector(getSupplierModuleState, state => state.supplier);
export const getCustomerItems = createSelector(getSupplierState, fromSupplier.getSupplierItems);