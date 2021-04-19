import { EventEmitter } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import { Recipe } from "./recipe.model";


export class RecipeService {
 recipeSelected = new EventEmitter<Recipe>();
 
 private recipes:Recipe[]=[
   new Recipe(
   'A Test Recipe',
   'A tasty Schnitzel',
   'https://static01.nyt.com/images/2021/03/28/dining/mc-shakshuka/mc-shakshuka-articleLarge.jpg',
   [
     new Ingredient('Meat',1),
     new Ingredient('French Fries',20)
   ]),
    new Recipe('Another Test Recipe',
    'What else you need to say?',
    'https://static01.nyt.com/images/2021/03/28/dining/mc-shakshuka/mc-shakshuka-articleLarge.jpg',
    [
     new Ingredient('Tomato',1),
     new Ingredient('Bread',20)
    ])
 ];

 getRecipes(){
  return this.recipes.slice();
 }


}