// components/RoomList.tsx
import React from 'react';
import { Room } from '../types';

interface RoomListProps {
  rooms: Room[];
}

export const RoomList: React.FC<RoomListProps> = ({ rooms }) => (
  <div className="mb-8">
    <h2 className="text-2xl font-bold mb-4">Rooms</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {rooms.map((room) => (
        <div key={room.roomSlug} className="rounded-lg overflow-hidden border border-gray-200 bg-white shadow">
          <div className="relative w-full h-48">
            <img
              src={room.roomImage}
              alt={room.roomTitle}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="p-4">
            <h3 className="text-xl font-semibold mb-2">{room.roomTitle}</h3>
            <p>Bedrooms: {room.bedroomCount}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
);