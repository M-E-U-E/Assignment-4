
// components/ImageGallery.tsx
import React from 'react';

interface ImageGalleryProps {
  images: { url: string; }[];
}

export const ImageGallery: React.FC<ImageGalleryProps> = ({ images = [] }) => {
  if (!images?.length) {
    return (
      <div className="space-y-4">
        <h2 className="text-2xl font-bold">Images</h2>
        <p className="text-gray-500">No images available</p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold">Images</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {images.map((image, index) => (
          <div key={index} className="rounded-lg overflow-hidden border border-gray-200 bg-white shadow">
            <div className="relative w-full h-48">
              <img
                src={image.url}
                alt={`Image ${index + 1}`}
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.currentTarget.src = '/path/to/placeholder-image.jpg';
                  e.currentTarget.alt = 'Image not available';
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};