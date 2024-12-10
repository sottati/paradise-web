"use client";

import { useState } from "react";
import Image from "next/image";

export default function ImageGallery({ images }: { images: string[] }) {
  const [currentImage, setCurrentImage] = useState(0);

  return (
    <div>
      <div className="relative h-96 mb-4">
        <Image
          src={images[currentImage]}
          alt={`Imagen ${currentImage + 1}`}
          fill
          className="object-cover rounded-lg"
        />
      </div>
      <div className="flex space-x-2">
        {images.map((image, index) => (
          <button
            key={index}
            onClick={() => setCurrentImage(index)}
            className={`w-16 h-16 relative ${
              index === currentImage ? "ring-2 ring-blue-500" : ""
            }`}
          >
            <Image
              src={image}
              alt={`Miniatura ${index + 1}`}
              fill
              className="object-cover rounded"
            />
          </button>
        ))}
      </div>
    </div>
  );
}
