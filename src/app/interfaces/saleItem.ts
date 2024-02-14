import Product from './product';

export default interface SaleItem {
  sale_item_id: number;
  product_id: number;
  sale_id: number;
  quantity: number;
  created_at: string;
  updated_at: string;
  product: Product;
}
