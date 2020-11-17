import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../../recipe.model';
import { RecipeService } from '../../recipe.service';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css'],
})
export class RecipeItemComponent implements OnInit {
  @Input('recipe') recipeItem: Recipe;
  constructor(private recipeService: RecipeService) {}

  onSelectedTab() {
    this.recipeService.selectedRecipe.emit(this.recipeItem);
  }

  ngOnInit(): void {}
}