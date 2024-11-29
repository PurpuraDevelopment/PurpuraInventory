import Head from 'next/head'; // Importar el componente Head
import { DashboardStats } from "@/components/dashboard-stats";
import { ProductList } from "@/components/product-list";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import AddProductDialog from "@/components/add-product-dialog";

export default function Home() {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="space-y-8">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold tracking-tight">Inicio</h1>
          <AddProductDialog>
            <Button>
              <Plus className="mr-2 h-4 w-4" />
              Agregar Producto
            </Button>
          </AddProductDialog>
        </div>

        <DashboardStats />
        <ProductList />
      </div>
    </>
  );
}
