# Febpos-Frontend

This is the frontend component of the Febpos Point of Sale System, developed using Angular.

## Project Overview

The Febpos Point of Sale System aims to streamline the sales process for Mr. Kirimi's retail hardware shop, transitioning from manual receipt creation to a web-based application. The frontend is responsible for managing product listings, sales, and providing a user-friendly interface for the accountant.

## Table of Contents

- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Project Structure](#project-structure)
- [Components](#components)
- [Services](#services)
- [Interfaces](#interfaces)
- [Pages](#pages)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Getting Started

### Prerequisites

Before you begin, ensure you have the following installed:

- [Node.js](https://nodejs.org/) - JavaScript runtime
- [Angular CLI](https://angular.io/cli) - Command Line Interface for Angular

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/patrickwide/febpos-frontend.git
   ```

2. Navigate to the project directory:

   ```bash
   cd febpos-frontend
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

### Running in Development Mode

To run the application in development mode, use the following Angular CLI command:

```bash
ng serve
```

This will start a development server, and you can view the application by navigating to `http://localhost:4200/` in your web browser.

### Note: Build Issue

If you encounter any build issues during the development process, please note that we are actively working to resolve them. As a temporary measure, you can try the following steps:

1. Stop the development server (if running).
2. Run the following command to force a fresh build:

   ```bash
   ng build --deleteOutputPath=false
   ```

3. Restart the development server with:

   ```bash
   ng serve
   ```

We appreciate your understanding, and the build issue will be fixed soon in future updates. If you continue to face any problems, please refer to the GitHub repository for the latest information or reach out to `patrickwide254@gmail.com`.

## Configuring API URL

To ensure proper communication between the frontend and backend, you need to specify the base URL of your backend API. Follow these steps to update the API URL:

1. Navigate to the `febpos-frontend/src` directory.

   ```bash
   cd febpos-frontend/src
   ```

2. Locate the `config.ts` file.

   ```bash
   src/config.ts
   ```

3. Open the `config.ts` file in a text editor of your choice.

4. Locate the `apiUrl` property within the `environment` object.

   ```typescript
   export const environment = {
     apiUrl: "http://localhost:8000/api", // replace with your API base URL
   };
   ```

5. Update the `apiUrl` with the correct base URL of your backend API.

   ```typescript
   export const environment = {
     apiUrl: "https://your-api-base-url.com/api",
   };
   ```

   Replace `'https://your-api-base-url.com/api'` with the actual URL where your backend API is hosted.

6. Save the changes.

This ensures that your frontend application communicates with the correct backend API. Remember to restart the development server (`ng serve`) after making these changes.

## Project Structure

The project follows a modular structure to enhance maintainability and scalability. Here is a brief overview:

- **app**: Main application folder.
  - **components**: Reusable UI components.
  - **interfaces**: Data models/interfaces used across the application.
  - **pages**: Components representing different views of the application.
  - **services**: Angular services for communication with APIs and data management.
  - **config**: Configuration files for the application.
  - **assets**: Static assets like images or styles.

## Components

### 1. `NavbarComponent`

- Description: Navigation bar component.
- Files:
  - `navbar.component.ts`
  - `navbar.component.html`
  - `navbar.component.css`

### 2. `ProductTableComponent`

- Description: Display products in a table format.
- Files:
  - `product-table.component.ts`
  - `product-table.component.html`
  - `product-table.component.css`

...

### 3. `AddToCartComponent`

- **Description**: A reusable component that allows users to add products to their shopping cart.
- **Files**:
  - `add-to-cart.component.ts`: Contains the component logic.
  - `add-to-cart.component.html`: Defines the HTML template.
  - `add-to-cart.component.css`: Includes styles specific to this component.

### 4. `ProductFormComponent`

- **Description**: Enables users to input details and add new products to the system.
- **Files**:
  - `product-form.component.ts`: Contains the component logic.
  - `product-form.component.html`: Defines the HTML template.
  - `product-form.component.css`: Includes styles specific to this component.

### 5. `ProductDialogComponent`

- **Description**: Represents a dialog/modal for displaying detailed information about a product.
- **Files**:
  - `product-dialog.component.ts`: Contains the component logic.
  - `product-dialog.component.html`: Defines the HTML template.
  - `product-dialog.component.css`: Includes styles specific to this component.

### 6. `SaleFormComponent`

- **Description**: Allows users to create new sales transactions, adding products and specifying quantities.
- **Files**:
  - `sale-form.component.ts`: Contains the component logic.
  - `sale-form.component.html`: Defines the HTML template.
  - `sale-form.component.css`: Includes styles specific to this component.

### 7. `SaleDialogComponent`

- **Description**: Represents a dialog/modal for displaying detailed information about a sale transaction.
- **Files**:
  - `sale-dialog.component.ts`: Contains the component logic.
  - `sale-dialog.component.html`: Defines the HTML template.
  - `sale-dialog.component.css`: Includes styles specific to this component.

### 8. `SaleTableComponent`

- **Description**: Displays sales transactions in a table format.
- **Files**:
  - `sale-table.component.ts`: Contains the component logic.
  - `sale-table.component.html`: Defines the HTML template.
  - `sale-table.component.css`: Includes styles specific to this component.

Each component plays a unique role in the application's user interface and functionality. They are designed for reusability and modularity, promoting maintainability and ease of development.

## Services

### 1. `ProductService`

- Description: Manages product-related data and interactions with the backend API.
- Files:
  - `product.service.ts`

### 2. `CartService`

- **Description**: Handles operations related to the shopping cart, such as adding items, removing items, and calculating totals.
- **Files**:
  - `cart.service.ts`: Contains methods for managing the shopping cart.

### 3. `CategoryService`

- **Description**: Handles operations related to product categories, such as fetching all categories and retrieving category details.
- **Files**:
  - `category.service.ts`: Implements methods for interacting with product categories.

### 4. `SaleService`

- **Description**: Manages sales-related data and interactions with the backend API, including creating new sales and retrieving existing ones.
- **Files**:
  - `sale.service.ts`: Contains methods for handling sales operations.

### 5. `UnitService`

- **Description**: Handles operations related to product units, such as fetching all units and retrieving unit details.
- **Files**:
  - `unit.service.ts`: Implements methods for interacting with product units.

Each service plays a crucial role in the application's functionality and interacts with the backend API to perform various operations.

## Interfaces

### 1. `Product`

- Description: Represents a product with attributes like name, price, category, etc.
- File:
  - `product.ts`

...

### 2. `CartItem`

- **Description**: Represents an item in the shopping cart with attributes like product details, quantity, and total price.
- **File**:
  - `cartItem.ts`: Defines the structure of a shopping cart item.

### 3. `Category`

- **Description**: Defines the structure of a product category with attributes such as name and description.
- **File**:
  - `category.ts`: Represents the data model for product categories.

### 4. `SaleItem`

- **Description**: Represents an item within a sale, including details like product, quantity, and total price.
- **File**:
  - `saleItem.ts`: Defines the structure of an item within a sale.

### 5. `Sale`

- **Description**: Represents a sales transaction with attributes like sale items, total price, and transaction date.
- **File**:
  - `sale.ts`: Describes the structure of a sales transaction.

### 6. `Unit`

- **Description**: Represents a unit of measurement for products, such as kilograms, packs, or pieces.
- **File**:
  - `unit.ts`: Defines the structure of a product unit.

Each interface serves a specific purpose in defining the structure of different entities within the application. These interfaces help maintain a consistent data structure and improve code readability.

## Pages

### 1. `HomeComponent`

- Description: Displays the list of projects.
- Files:
  - `home.component.ts`
  - `home.component.html`
  - `home.component.css`

### 2. `SalesComponent`

- Description: Manages sales-related functionalities.
- Files:
  - `sales.component.ts`
  - `sales.component.html`
  - `sales.component.css`

...

## Contributing

Contributions are welcome! Feel free to open issues or pull requests.

## License

This project is provided as-is without any explicit license. It is a public project on the internet, and you are free to use, modify, and distribute the code at your own risk. There are no warranties or guarantees associated with this project.

If you have any questions or concerns, feel free to contact the project owner via email at `patrickwide254@gmail.com`
