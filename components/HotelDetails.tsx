// components/HotelDetails.tsx
import React from 'react';
import { Hotel } from '../types';

interface HotelDetailsProps {
  hotel: Hotel;
}

export const HotelDetails: React.FC<HotelDetailsProps> = ({ hotel }) => (
  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
    <div>
      <h2 className="text-2xl font-bold mb-4">Details</h2>
      <ul className="space-y-2">
        <li>Guest Capacity: {hotel.guestCount}</li>
        <li>Bedrooms: {hotel.bedroomCount}</li>
        <li>Bathrooms: {hotel.bathroomCount}</li>
        <li>Address: {hotel.address}</li>
      </ul>
    </div>
    <div>
      <h2 className="text-2xl font-bold mb-4">Host Information</h2>
      <ul className="space-y-2">
        <li>Name: {hotel.host.name}</li>
        <li>Email: <a href={`mailto:${hotel.host.email}`} className="text-blue-600 hover:underline">{hotel.host.email}</a></li>
      </ul>
    </div>
  </div>
);
