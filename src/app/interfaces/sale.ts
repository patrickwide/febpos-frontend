import SaleItem from './saleItem';

export default interface Sale {
  sale_id: number;
  sale_date: string;
  vat: number;
  discount: string;
  created_at: string;
  updated_at: string;
  sale_items: SaleItem[];
  sub_total?: number;
  vat_amount?: number;
  total_after_discount?: number;
  total?: number;
}
