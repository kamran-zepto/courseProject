import { EventEmitter } from '@angular/core';
import { Recipe } from './recipe.model';
export class RecipeService {
  selectedRecipe = new EventEmitter<Recipe>();
  private recipes: Recipe[] = [
    new Recipe(
      'A Test Recipe',
      'This is simply test',
      'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?quality=90&resize=960,872'
    ),
    new Recipe(
      'Second test recipe',
      'This is simply second test',
      'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?quality=90&resize=960,872'
    ),
  ];

  getRecipes() {
    return this.recipes.slice();
  }
}
