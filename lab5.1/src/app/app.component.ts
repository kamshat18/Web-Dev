import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Category } from './models/category.model';
import { Product } from './models/product.model';
import { ProductService } from './services/product.service';
import { ProductListComponent } from './products/product-list/product-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, ProductListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  private readonly productService = inject(ProductService);

  categories: Category[] = this.productService.getCategories();
  selectedCategoryId: number | null = null;

  get selectedProducts(): Product[] {
    if (this.selectedCategoryId === null) return [];
    return this.productService.getProductsByCategory(this.selectedCategoryId);
  }

  selectCategory(categoryId: number): void {
    this.selectedCategoryId = categoryId;
  }
}
