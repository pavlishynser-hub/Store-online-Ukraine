export type Product = {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  promLink: string;
  category: string;
  badge?: string;
  inStock?: boolean;
  tags?: string[];
};
