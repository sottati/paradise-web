import { Cabana } from "@/app/types/cabana-images";
import { User } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

type CabanaCardProps = {
  cabana: Cabana;
};

export function CabanaCard({ cabana }: CabanaCardProps) {
  console.log(cabana);
  console.log("Imagen: ", cabana.portada);
  return (
    <Link
      href={cabana.id}
      key={cabana.id}
      className="block min-w-52 border rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
    >
      <div className="flex flex-row justify-between p-4 gap-8">
        <h3 className="text-xl font-semibold">{cabana.nombre}</h3>
        <p className="flex flex-row gap-1">
          <span className="text-lg font-semibold">{cabana.capacidad}</span>
          <User />
        </p>
      </div>
    </Link>
  );
}
