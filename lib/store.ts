import { create } from 'zustand';

export interface Product {
  id: number;
  name: string;
  sku: string;
  quantity: number;
  price: number;
  status: 'En Stock' | 'Stock Bajo';
}

interface ProductStore {
  products: Product[];
  addProduct: (product: Omit<Product, 'id' | 'status'>) => void;
  removeProduct: (id: number) => void;
  updateProduct: (id: number, product: Partial<Product>) => void;
}

export const useProductStore = create<ProductStore>((set) => ({
  products: [
    {
      id: 1,
      name: "Iphone 16 Pro Max",
      sku: "APPLE-16PM",
      quantity: 5,
      price: 999.99,
      status: "En Stock",
    },
    {
      id: 2,
      name: "Wireless Mouse M2",
      sku: "MOU-002",
      quantity: 2,
      price: 29.99,
      status: "Stock Bajo",
    },
    {
      id: 3,
      name: "4K Monitor 27\"",
      sku: "MON-003",
      quantity: 8,
      price: 399.99,
      status: "En Stock",
    },
  ],
  addProduct: (product) =>
    set((state) => ({
      products: [
        ...state.products,
        {
          ...product,
          id: Math.max(0, ...state.products.map((p) => p.id)) + 1,
          status: product.quantity <= 3 ? 'Stock Bajo' : 'En Stock',
        },
      ],
    })),
  removeProduct: (id) =>
    set((state) => ({
      products: state.products.filter((p) => p.id !== id),
    })),
  updateProduct: (id, updatedProduct) =>
    set((state) => ({
      products: state.products.map((p) =>
        p.id === id
          ? {
              ...p,
              ...updatedProduct,
              status:
                'quantity' in updatedProduct
                  ? updatedProduct.quantity! <= 3
                    ? 'Stock Bajo'
                    : 'En Stock'
                  : p.status,
            }
          : p
      ),
    })),
}));