import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { SearchResultReducer } from './search-results-reducer';
import { MenuReducer } from './menu-reducer';
import { environment } from '../../environments/environment';

export interface State {

}

export const reducers: ActionReducerMap<State> = {
  searchResults: SearchResultReducer,
  menuState: MenuReducer
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
