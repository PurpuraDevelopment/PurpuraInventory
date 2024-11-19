import { create } from 'zustand';

export interface Product {
  id: number;
  name: string;
  sku: string;
  quantity: number;
  price: number;
  status: 'In Stock' | 'Low Stock';
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
      name: "Laptop Pro X1",
      sku: "LAP-001",
      quantity: 5,
      price: 999.99,
      status: "In Stock",
    },
    {
      id: 2,
      name: "Wireless Mouse M2",
      sku: "MOU-002",
      quantity: 2,
      price: 29.99,
      status: "Low Stock",
    },
    {
      id: 3,
      name: "4K Monitor 27\"",
      sku: "MON-003",
      quantity: 8,
      price: 399.99,
      status: "In Stock",
    },
  ],
  addProduct: (product) =>
    set((state) => ({
      products: [
        ...state.products,
        {
          ...product,
          id: Math.max(0, ...state.products.map((p) => p.id)) + 1,
          status: product.quantity <= 3 ? 'Low Stock' : 'In Stock',
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
                    ? 'Low Stock'
                    : 'In Stock'
                  : p.status,
            }
          : p
      ),
    })),
}));