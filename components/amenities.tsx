import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Utensils,
  UtensilsCrossed,
  Lock,
  Wifi,
  Timer,
  Dog,
  Tv,
} from "lucide-react";

// Tipo para los props de un amenity
type Amenity = {
  id: string;
  title: string;
  description: string;
  icon: keyof typeof iconMap;
};

// JSON con la data de los amenities
const amenitiesData: Amenity[] = [
  {
    id: "services",
    title: "Servicios",
    description:
      "Servicio de blanco (sabanas). Kit de cortesía (café, té, agua mineral, bombones).",
    icon: "Utensils",
  },
  {
    id: "grill",
    title: "Parrilla y Fogonero",
    description:
      "Espacio de uso común para poder realizar asados o comidas y disfrutar de fogones entre amigos.",
    icon: "UtensilsCrossed",
  },
  {
    id: "security",
    title: "Espacio cerrado",
    description:
      "Predio totalmente cerrado con cerco natural. Contamos con cámaras de seguridad grabando 24/7 e iluminación con sensor de movimiento.",
    icon: "Lock",
  },
  {
    id: "wifi",
    title: "Wi-Fi",
    description:
      "Internet con fibra óptica de alta velocidad para que puedas trabajar o tiktokear todo el dia.",
    icon: "Wifi",
  },
  {
    id: "pet-friendly",
    title: "Pet Friendly",
    description:
      "Aceptamos mascotas, preferentemente de razas pequeñas, para preservar el cuidado de las cabañas.",
    icon: "Dog",
  },
  {
    id: "TV",
    title: "DirecTV prepago",
    description:
      "Televisión satelital, 100% digital. Contamos con televisores Smart para poder utilizar aplicaciones de streaming de series/peliculas.",
    icon: "Tv",
  },
];

// Mapa de iconos
const iconMap = {
  Utensils,
  UtensilsCrossed,
  Lock,
  Wifi,
  Timer,
  Dog,
  Tv,
};

// Componente AmenityCard
const AmenityCard = ({ title, description, icon }: Amenity) => {
  const IconComponent = iconMap[icon];

  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <IconComponent className="h-5 w-5 text-red-600" />
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription>{description}</CardDescription>
      </CardContent>
    </Card>
  );
};

// Componente principal Amenities
export const Amenities = () => {
  return (
    <div className="container mx-auto my-4">
      <h2 className="mb-4 text-center text-3xl font-bold tracking-tight">
        Amenities
      </h2>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {amenitiesData.map((amenity) => (
          <AmenityCard key={amenity.id} {...amenity} />
        ))}
      </div>
    </div>
  );
};
