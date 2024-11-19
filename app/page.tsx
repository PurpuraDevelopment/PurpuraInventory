import { DashboardStats } from "@/components/dashboard-stats";
import { ProductList } from "@/components/product-list";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import AddProductDialog from "@/components/add-product-dialog";

export default function Home() {
  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1> {/* Título estático */}
        <AddProductDialog>
          <Button>
            <Plus className="mr-2 h-4 w-4" />
            Add Product {/* Texto estático */}
          </Button>
        </AddProductDialog>
      </div>

      <DashboardStats />
      <ProductList />
    </div>
  );
}
