import React from "react";

interface AmenitiesListProps {
  amenities: string[];
}

const AmenitiesList = ({ amenities }: AmenitiesListProps) => {
  return (
    <ul className="list-disc list-inside space-y-2 text-gray-700">
      {amenities.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
};

export default AmenitiesList;
