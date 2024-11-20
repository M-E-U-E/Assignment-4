// components/Amenities.tsx
import React from 'react';

interface AmenitiesProps {
  amenities: string[];
}

export const Amenities: React.FC<AmenitiesProps> = ({ amenities }) => (
  <div className="mb-8">
    <h2 className="text-2xl font-bold mb-4">Amenities</h2>
    <ul className="grid grid-cols-2 md:grid-cols-3 gap-2">
      {amenities.map((amenity, index) => (
        <li key={index} className="flex items-center space-x-2">
          <span>•</span>
          <span>{amenity}</span>
        </li>
      ))}
    </ul>
  </div>
);