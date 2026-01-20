'use client';

import { useState } from 'react';
import Image, { StaticImageData } from 'next/image';

interface ImageGalleryProps {
  images: Array<{
    src: StaticImageData | string;
    alt: string;
  }>;
  className?: string;
  layout?: 'grid' | 'stack';
}

export default function ImageGallery({ images, className = '', layout = 'grid' }: ImageGalleryProps) {
  const [mainImageIndex, setMainImageIndex] = useState(0);

  if (images.length === 0) return null;

  if (layout === 'stack') {
    return (
      <div className={`space-y-4 ${className}`}>
        {images.map((image, index) => (
          <div
            key={index}
            className="relative h-64 bg-gray-100 rounded-2xl overflow-hidden cursor-pointer hover:scale-[1.02] transition-transform duration-300"
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className="object-contain p-3"
              placeholder="blur"
            />
          </div>
        ))}
      </div>
    );
  }

  // Grid layout
  if (images.length === 1) {
    return (
      <div className={className}>
        <div className="relative h-64 bg-gray-100 rounded-2xl overflow-hidden">
          <Image
            src={images[0].src}
            alt={images[0].alt}
            fill
            className="object-contain p-3"
            placeholder="blur"
          />
        </div>
      </div>
    );
  }

  return (
    <div className={className}>
      {/* Main large image */}
      <div className="relative h-64 bg-gray-100 rounded-2xl overflow-hidden mb-4 cursor-pointer hover:scale-[1.01] transition-transform duration-300">
        <Image
          src={images[mainImageIndex].src}
          alt={images[mainImageIndex].alt}
          fill
          className="object-contain p-3"
          placeholder="blur"
        />
      </div>
      
      {/* Thumbnail grid */}
      {images.length > 1 && (
        <div className="grid grid-cols-2 gap-4">
          {images.map((image, index) => {
            if (index === mainImageIndex) return null;
            return (
              <div
                key={index}
                className="relative h-48 bg-gray-100 rounded-2xl overflow-hidden cursor-pointer hover:scale-[1.02] transition-transform duration-300 border-2 border-transparent hover:border-[#FFAAB8]"
                onClick={() => setMainImageIndex(index)}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-contain p-3"
                  placeholder="blur"
                />
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
