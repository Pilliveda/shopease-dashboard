import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

interface Feedback {
  rating: number;
  comment: string;
}

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  @Input() product: any;  // Receive selected product from parent
  @Output() feedback = new EventEmitter<Feedback>();  // Emit feedback to parent

  rating: number = 5;
  comment: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  sendFeedback() {
    this.feedback.emit({
      rating: this.rating,
      comment: this.comment
    });
    this.comment = '';  // Reset comment after sending
  }

}
