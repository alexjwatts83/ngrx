import { Ingredient } from '../../shared/ingredient.model';
import * as ShopplingListActions from './shopping-list.actions';

const initialState = {
  ingredients: [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10),
  ]
};

export function shoppingListReducer(state = initialState, action: ShopplingListActions.AddIngredient) {
  switch (action.type) {
    case ShopplingListActions.ADD_INGREDIENT:
      return {
        ...state,
        ingredients: [...state.ingredients, action.payload]
      };
    default:
      return state;
  }
}
