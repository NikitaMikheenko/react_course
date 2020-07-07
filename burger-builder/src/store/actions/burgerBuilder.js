import {
    ADD_INGREDIENT, REMOVE_INGREDIENT, SET_INGREDIENTS,
    FETCH_INGREDIENTS_FAILED, INIT_INGREDIENTS
} from './actionTypes';

export const addIngredient = (value) => ({
    type: ADD_INGREDIENT,
    ingredientName: value
});

export const removeIngredient = (value) => ({
    type: REMOVE_INGREDIENT,
    ingredientName: value
});

export const setIngredients = (ingredients) => ({
    type: SET_INGREDIENTS,
    ingredients: ingredients
});

export const fetchIngredientsFailed = () => ({
    type: FETCH_INGREDIENTS_FAILED
});

export const initIngredients = () => ({
    type: INIT_INGREDIENTS
});