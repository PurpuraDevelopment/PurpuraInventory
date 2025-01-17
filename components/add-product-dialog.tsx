"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { useProductStore } from "@/lib/store";
import { useToast } from "./ui/use-toast";

export default function AddProductDialog({
  children,
}: {
  children: React.ReactNode;
}) {
  const { toast } = useToast();
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    sku: "",
    quantity: "",
    price: "",
  });

  const addProduct = useProductStore((state) => state.addProduct);

  const handleSubmit = () => {
    if (!formData.name || !formData.sku || !formData.quantity || !formData.price) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Completa todas las celdas",
      });
      return;
    }

    addProduct({
      name: formData.name,
      sku: formData.sku,
      quantity: parseInt(formData.quantity),
      price: parseFloat(formData.price),
    });

    setFormData({
      name: "",
      sku: "",
      quantity: "",
      price: "",
    });

    toast({
      title: "Success",
      description: "Producto agregado exitosamente",
    });

    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Agregar Producto</DialogTitle>
          <DialogDescription>
          Por favor, rellene el formulario a continuación para agregar un nuevo producto.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Nombre de Producto
            </Label>
            <Input
              id="name"
              placeholder="Escribe el nombre del producto"
              className="col-span-3"
              value={formData.name}
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, name: e.target.value }))
              }
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="sku" className="text-right">
              Codigo de Barra
            </Label>
            <Input
              id="sku"
              placeholder="Digita el codigo de barra del producto"
              className="col-span-3"
              value={formData.sku}
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, sku: e.target.value }))
              }
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="quantity" className="text-right">
              Cantidad
            </Label>
            <Input
              id="quantity"
              type="number"
              placeholder="0"
              className="col-span-3"
              value={formData.quantity}
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, quantity: e.target.value }))
              }
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="price" className="text-right">
              Precio
            </Label>
            <Input
              id="price"
              type="number"
              step="0.01"
              placeholder="0.00"
              className="col-span-3"
              value={formData.price}
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, price: e.target.value }))
              }
            />
          </div>
        </div>
        <div className="flex justify-end">
          <Button onClick={handleSubmit}>Guardar</Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
