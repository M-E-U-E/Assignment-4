// components/Location.tsx
import React from 'react';

interface LocationProps {
  latitude: number;
  longitude: number;
}

export const Location: React.FC<LocationProps> = ({ latitude, longitude }) => (
  <div className="mb-8">
    <h2 className="text-2xl font-bold mb-4">Location</h2>
    <ul className="space-y-2">
      <li>Latitude: {latitude}</li>
      <li>Longitude: {longitude}</li>
    </ul>
  </div>
);
