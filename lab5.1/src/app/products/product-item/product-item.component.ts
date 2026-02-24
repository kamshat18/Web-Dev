import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-item.component.html',
  styleUrl: './product-item.component.css',
})
export class ProductItemComponent {
  @Input({ required: true }) product!: Product;
  @Output() delete = new EventEmitter<number>();

  like(): void {
    this.product.likes += 1;
  }

  requestDelete(): void {
    this.delete.emit(this.product.id);
  }

  shareToWhatsApp(): void {
    const text = encodeURIComponent(`Check this out: ${this.product.name}`);
    const url = encodeURIComponent(this.product.link);
    window.open(`https://wa.me/?text=${text}%20${url}`, '_blank');
  }

  shareToTelegram(): void {
    const text = encodeURIComponent(`Check this out: ${this.product.name}`);
    const url = encodeURIComponent(this.product.link);
    window.open(`https://t.me/share/url?url=${url}&text=${text}`, '_blank');
  }
}
