import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../../recipe.model';
import { RecipeService } from '../../recipe.serviceklnnp ';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css'],
})
export class RecipeItemComponent implements OnInit {
  @Input('recipe') recipeItem: Recipe;
  @Output() recipeSelected = new EventEmitter<void>();
  constructor(private recipeService: RecipeService) {}

  onSelectedTab() {
    this.recipeSelected.emit();
  }

  ngOnInit(): void {}
}
