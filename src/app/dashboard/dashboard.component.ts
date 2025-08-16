import { Component, OnInit } from '@angular/core';

interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
}

interface Feedback {
  rating: number;
  comment: string;
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  products: Product[] = [
    { id: 1, name: 'Mobile', price: 15000, description: 'Latest smartphone' },
    { id: 2, name: 'Laptop', price: 60000, description: 'Powerful laptop' },
    { id: 3, name: 'Headphones', price: 2500, description: 'Noise cancellation' }
  ];

  selectedProduct?: Product;

  feedbacks: { [productId: number]: Feedback } = {};

  constructor() { }

  ngOnInit(): void {
  }

  selectProduct(product: Product) {
    this.selectedProduct = product;
  }

  onFeedbackReceived(feedback: Feedback) {
    if (this.selectedProduct) {
      this.feedbacks[this.selectedProduct.id] = feedback;
    }
  }

}
