"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ImageGallery({ images }: { images: string[] }) {
  const [currentImage, setCurrentImage] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const nextImage = useCallback(() => {
    setCurrentImage((prev) => (prev + 1) % images.length);
  }, [images.length]);

  const prevImage = useCallback(() => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
  }, [images.length]);

  useEffect(() => {
    const handleKeydown = (e: KeyboardEvent) => {
      if (!isModalOpen) return;
      if (e.key === "ArrowRight") nextImage();
      if (e.key === "ArrowLeft") prevImage();
    };

    window.addEventListener("keydown", handleKeydown);
    return () => window.removeEventListener("keydown", handleKeydown);
  }, [isModalOpen, nextImage, prevImage]);

  return (
    <div>
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogTrigger asChild>
          <div className="relative h-96 mb-4 cursor-pointer">
            <Image
              src={images[currentImage]}
              alt={`Imagen ${currentImage + 1}`}
              fill
              className="object-cover rounded-lg"
              quality={100}
              priority
            />
          </div>
        </DialogTrigger>
        <DialogContent className="max-w-[95vw] p-0 border-none bg-transparent text-red-600">
          <div className="relative w-full h-full min-h-[80vh] flex items-center justify-center">
            <Button onClick={prevImage} size="icon">
              <ChevronLeft></ChevronLeft>
            </Button>
            <div className="relative w-full h-full">
              <Image
                src={images[currentImage]}
                alt={`Imagen ${currentImage + 1}`}
                fill
                className="object-contain"
                quality={100}
                priority
              />
            </div>
            <Button onClick={nextImage} size="icon">
              <ChevronRight></ChevronRight>
            </Button>
            {/* <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white">
              {currentImage + 1} / {images.length}
            </div> */}
          </div>
        </DialogContent>

        {/* <DialogContent className="max-w-[95vw] max-h-[95vh] p-0 border-none bg-transparent">
          <div className="relative w-full h-full min-h-[80vh] flex items-center justify-center">
            <Button
              onClick={prevImage}
              size="icon"
              // className="absolute left-4 top-1/2 -translate-y-1/2 text-white text-4xl
              //          hover:text-gray-300 bg-black/50 p-2 rounded-full z-10"
            >
              <ChevronLeft></ChevronLeft>
            </Button>

            <div className="relative w-full h-full">
              <Image
                src={images[currentImage]}
                alt={`Imagen ${currentImage + 1}`}
                fill
                className="object-contain"
                quality={100}
                priority
              />
            </div>

            <Button onClick={nextImage} size="icon">
              <ChevronRight></ChevronRight>
            </Button>

            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white">
              {currentImage + 1} / {images.length}
            </div>
          </div>
        </DialogContent> */}
      </Dialog>

      <div className="flex flex-row justify-center space-x-2 overflow-x-auto py-2">
        {images.map((image, index) => (
          <button
            key={index}
            onClick={() => setCurrentImage(index)}
            className={`w-16 h-16 relative flex-shrink-0 ${
              index === currentImage ? "ring-2 ring-blue-500 rounded" : ""
            }`}
          >
            <Image
              src={image}
              alt={`Miniatura ${index + 1}`}
              fill
              className="object-cover rounded"
              quality={50}
            />
          </button>
        ))}
      </div>
    </div>
  );
}
