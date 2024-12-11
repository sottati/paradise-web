import { notFound } from "next/navigation";
import cabanas from "../data/cabanas.json";
import ImageGallery from "./image-gallery";
import { getImagesFromDirectory } from "../utils/images";
import { Suspense } from "react";
import { User } from "lucide-react";

export function generateStaticParams() {
  return cabanas.map((cabana) => ({
    id: cabana.id,
  }));
}

export default async function CabanaPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const cabana = cabanas.find((c) => c.id === id);

  console.log("Cabana: ", cabana);

  if (!cabana) {
    notFound();
  }

  const imagenes = getImagesFromDirectory(cabana.path);
  console.log(imagenes);

  return (
    <div className="mx-auto w-full max-w-4xl flex flex-col p-4 sm:p-8 gap-4">
      <header className="flex flex-row gap-4">
        <h2 className="text-3xl font-bold">{cabana.nombre}</h2>
        <span className="flex flex-row gap-2 my-auto text-xl font-semibold">
          {cabana.capacidad}
          <User></User>
        </span>
      </header>
      <div>
        <p className="text-gray-700">{cabana.descripcion}</p>
      </div>
      <ImageGallery images={imagenes} />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8"></div>
    </div>
  );
}
