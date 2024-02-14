import Category from './category';

export default interface Product {
  product_id: number;
  product_name: string;
  unit: string;
  price: string;
  description: string;
  category_id: number;
  created_at: string;
  updated_at: string;
  category?: Category;
}
