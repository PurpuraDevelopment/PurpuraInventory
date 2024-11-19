"use client";

import { Package2 } from "lucide-react";
import { ModeToggle } from "./mode-toggle";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center px-4">
        <Link href="/" className="flex items-center space-x-2">
          <Package2 className="h-6 w-6 text-purple-600" />
          <span className="font-bold">Purpura Inventory</span> {/* Título estático */}
        </Link>
        <div className="ml-auto flex items-center space-x-4">
          <ModeToggle /> {/* Modo oscuro/claro */}
        </div>
      </div>
    </nav>
  );
}
