# ShopEase Dashboard

This project is a simple Angular application created with Angular CLI version 14.2.13, demonstrating **component communication** between a parent component (`DashboardComponent`) and a child component (`ProductDetailsComponent`).

---

## Project Description

The application displays a list of products on the dashboard. When a user clicks "View Details" on a product, the selected product’s details are passed from the parent to the child component using `@Input()`. Inside the child component, the user can submit feedback (rating and comment), which is sent back to the parent component via `@Output()` and displayed immediately beside the corresponding product without reloading the page.

This demonstrates effective parent-child communication and dynamic data binding in Angular.

---

## Development Setup

### Prerequisites
- Node.js (version 16 recommended)
- Angular CLI version 14.2.13

### Installation

1. Clone or download the project folder.
2. Navigate to the project directory in a terminal.
3. Run to install dependencies:
    ```
    npm install
    ```

### Running the Application

Start the development server:
ng serve

text
Open a web browser to [http://localhost:4200](http://localhost:4200) to view the app. The app will reload automatically on changes.

---

## Features

- Product list display on parent component.
- Dynamic product detail viewing in child component.
- Feedback submission with rating and comments.
- Feedback data sent back and rendered on the parent component real-time.
- No external state management used—communication handled using Angular decorators.

---

## Further Help

To learn more about the Angular CLI commands, run:
ng help

text
or visit the [Angular CLI Official Documentation](https://angular.io/cli).

---





