import { notFound } from "next/navigation";
import cabanas from "../data/cabanas.json";
import ImageGallery from "./image-gallery";

export function generateStaticParams() {
  return cabanas.map((cabana) => ({
    id: cabana.id,
  }));
}

export default function CabanaPage({ params }: { params: { id: string } }) {
  const cabana = cabanas.find((c) => c.id === params.id);

  if (!cabana) {
    notFound();
  }

  return (
    <div className="mx-auto w-full max-w-4xl flex flex-col p-4 sm:p-8 gap-4">
      <h2 className="text-3xl font-bold mb-6">{cabana.nombre}</h2>
      <div className="bg-red-100">
        <ImageGallery images={cabana.imagenes} />
      </div>
      <div>
        <h3 className="text-xl font-semibold mb-4">Descripción</h3>
        <p className="text-gray-700">{cabana.descripcion}</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8"></div>
    </div>
  );
}
