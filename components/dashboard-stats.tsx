"use client";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Package, PackageCheck, PackageX, DollarSign } from "lucide-react";
import { useProductStore } from "@/lib/store";

export function DashboardStats() {
  const products = useProductStore((state) => state.products);

  const totalProducts = products.length; // Total de productos
  const inStock = products.filter((p) => p.status === "En Stock").length; // Productos en stock
  const lowStock = products.filter((p) => p.status === "Stock Bajo").length; // Productos con stock bajo
  const totalValue = products.reduce((sum, p) => sum + p.price * p.quantity, 0); // Valor total

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Productos Totales</CardTitle>
          <Package className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{totalProducts}</div>
          <p className="text-xs text-muted-foreground">+4 desde el mes pasado</p> {/* Texto estático */}
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">En Stock</CardTitle>
          <PackageCheck className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{inStock}</div>
          <p className="text-xs text-muted-foreground">
            {Math.round((inStock / totalProducts) * 100)}% del total
          </p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Stock Bajo</CardTitle>
          <PackageX className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{lowStock}</div>
          <p className="text-xs text-muted-foreground">Requiere atención</p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Valor Total</CardTitle>
          <DollarSign className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">${totalValue.toFixed(2)}</div>
          <p className="text-xs text-muted-foreground">Valor actual</p>
        </CardContent>
      </Card>
    </div>
  );
}
