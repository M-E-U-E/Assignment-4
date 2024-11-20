import React from "react";

import Header from "../components/Header";
import Footer from "../components/Footer";
import BookingCard from "../components/BookingCard";
import AmenitiesList from "../components/AmenitiesList";

const Home = () => {
  // Define the list of amenities
  const amenities = [
    "Free Wi-Fi",
    "Air Conditioning",
    "Swimming Pool",
    "Room Service",
    "Fitness Center",
    "Pet-Friendly",
    "Parking",
    "Spa Services",
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header Component */}
      <Header />

      {/* Main Content */}
      <main className="flex-grow">
        <div className="text-center p-8">
          <h1 className="text-4xl font-bold mb-4">Welcome to the Hotel Details App</h1>
          <p className="text-gray-600">Browse and explore amazing hotels around the world.</p>
        </div>

        {/* Amenities Section */}
        <div className="bg-gray-50 py-8">
          <h2 className="text-2xl font-semibold text-center mb-4">Amenities</h2>
          <div className="max-w-3xl mx-auto">
            <AmenitiesList amenities={amenities} />
          </div>
        </div>

        {/* Booking Section */}
        <div className="min-h-screen bg-gray-100 flex items-center justify-center">
          <BookingCard />
        </div>
      </main>

      {/* Footer Component */}
      <Footer />
    </div>
  );
};

export default Home;
