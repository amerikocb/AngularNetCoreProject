import { Supplier } from '../../models/Supplier';
import { SupplierActions, SupplierActionsTypes } from '../actions/supplier-actions';

export interface State{
    items: Supplier[];
}
const initialState: State ={
    items:[]
};
export function SupplierReducer(state= initialState, action: SupplierActions): State{
    switch (action.type) {
        case SupplierActionsTypes.LoadData:
            return {...state};
        case SupplierActionsTypes.LoadDataCompleted:
            return {...state, items: action.payload};
        default:
            return state;
    }
}

export const getSupplierItems = (state: State) => state.items;