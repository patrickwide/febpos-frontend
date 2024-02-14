import Category from './category';

export default interface Product {
  product_id: number;
  product_name: string;
  unit: string;
  price: string; // You might want to use a numeric type for price, depending on your requirements
  description: string;
  category_id: number;
  created_at: string; // Consider using Date type for timestamps
  updated_at: string; // Consider using Date type for timestamps
  category: Category;
}
