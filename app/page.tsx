import { Amenities } from "@/components/amenities";
import { CabanaCard } from "../components/cabana-card";
import { HomeSlider } from "@/components/home-slider";

import cabanas from "@/app/data/cabanas.json";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className="mx-auto w-full max-w-4xl flex flex-col p-4 sm:p-8 gap-4">
      <HomeSlider></HomeSlider>
      <h1 className="text-4xl font-extrabold">Cabañas Paradise Chapadmalal</h1>
      <p>
        Paradise Chapadmalal es el lugar perfecto para pasar vacaciones o
        simplemente disfrutar de unos días de descanso con familia y amigos,
        entre el campo y el mar. Disponemos de dos hermosas cabañas (Tiny
        House), pensadas para hospedar hasta cuatro personas en cada una y una
        casa, disponible para alojar hasta 6 personas.Ubicadas en la mejor y más
        linda zona del Barrio Playa Chapadmalal (Calle 729 Nº 351, entre calles
        10 y 12), a 350 metros de la playa Paradise y a 450 metros del Balneario
        Cruz del Sur.
      </p>
      <div className="w-full flex flex-col sm:flex-row justify-between">
        {cabanas.map((cabana) => (
          <Link href={cabana.id} key={cabana.id} className="block">
            <div className="border rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <Image
                src={cabana.imagenes[0]}
                alt={cabana.nombre}
                width={600}
                height={400}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">{cabana.nombre}</h3>
                <p className="text-gray-600">
                  {cabana.descripcion.substring(0, 100)}...
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
      <p>
        El jardín de uso común con plantas, árboles, parrilla y fogonero, ofrece
        un ambiente rodeado de naturaleza para disfrutar entre los huéspedes.
        Nuestro propósito es brindar un trato cercano, un ambiente relajado y
        familiar.
      </p>
      <Amenities />
      <div className="mb-12 rounded-xl overflow-clip">
        <iframe
          className="w-full h-72"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3136.462868040775!2d-57.65595082331227!3d-38.17592105482406!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95851d1592f6455b%3A0x4565673369ada6ae!2sCaba%C3%B1as%20Paradise%20Chapadmalal!5e0!3m2!1ses!2sar!4v1698957755061!5m2!1ses!2sar"
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
}
