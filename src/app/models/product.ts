export interface Product {
  id: number;
  title: string;
  price: string;
  description: string;
  category: string;
  image: string;
  count?: number;
  userId?: number;
}
