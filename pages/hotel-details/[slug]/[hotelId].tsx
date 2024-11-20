import { GetServerSideProps } from 'next';
import Head from 'next/head';

interface Room {
  hotelSlug: string;
  roomSlug: string;
  roomImage: string;
  roomTitle: string;
  bedroomCount: number;
}

interface Hotel {
  id: string;
  slug: string;
  images: {
    url: string;
  }[];
  title: string;
  description: string;
  guestCount: number;
  bedroomCount: number;
  bathroomCount: number;
  amenities: string[];
  host: {
    name: string;
    email: string;
  };
  address: string;
  latitude: number;
  longitude: number;
  rooms: Room[];
}

const ImageGallery = ({ images = [] }) => {
    if (!images || images.length === 0) {
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
                    e.currentTarget.src = '/path/to/placeholder-image.jpg'; // Use a placeholder image
                    e.currentTarget.alt = 'Image not available'; // Update alt text
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };
const HotelDetailsPage = ({ hotel }: { hotel: Hotel }) => {
  if (!hotel) {
    return <p>Hotel not found.</p>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <Head>
        <title>{hotel.title}</title>
      </Head>

      <h1 className="text-3xl font-bold mb-6">{hotel.title}</h1>
      <p className="text-gray-600 mb-8">{hotel.description}</p>
      
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
      
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Amenities</h2>
        <ul className="grid grid-cols-2 md:grid-cols-3 gap-2">
          {hotel.amenities.map((amenity, index) => (
            <li key={index} className="flex items-center space-x-2">
              <span>•</span>
              <span>{amenity}</span>
            </li>
          ))}
        </ul>
      </div>
      
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Location</h2>
        <ul className="space-y-2">
          <li>Latitude: {hotel.latitude}</li>
          <li>Longitude: {hotel.longitude}</li>
        </ul>
      </div>
      
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Rooms</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {hotel.rooms.map((room) => (
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
      
      <ImageGallery images={hotel.images} />
    </div>
  );
};

export default HotelDetailsPage;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { hotelId } = context.params!;
  try {
    const res = await fetch(`http://localhost:3010/api/hotels/${hotelId}`);
    const hotel = await res.json();
    return { props: { hotel } };
  } catch (error) {
    return { notFound: true };
  }
};