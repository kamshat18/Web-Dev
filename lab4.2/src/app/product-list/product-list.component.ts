import { Component, Input, OnChanges, SimpleChanges, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
// Исправленные пути (3 уровня вверх: ../../../)
import { Product } from '../models/product.model';
import { ProductItemComponent } from '../product-item/product-item.component';
import { ProductService } from '../services/product-service.service';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, ProductItemComponent],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css',
})
export class ProductListComponent implements OnChanges {
  // Убрали : unknown, чтобы TypeScript видел методы сервиса
  private readonly productService = inject(ProductService);

  @Input({ required: true }) products: Product[] = [];

  displayed: Product[] = [];

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['products']) {
      this.displayed = [...this.products];
    }
  }

  onDelete(productId: number): void {
    // Теперь это сработает, так как тип сервиса определен верно
    this.productService.deleteProduct(productId);
    this.displayed = this.displayed.filter((p) => p.id !== productId);
  }
}