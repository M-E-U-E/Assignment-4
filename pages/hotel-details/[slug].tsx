// import { GetServerSideProps } from 'next';

// interface HotelDetailsProps {
//   hotelData: {
//     title: string;
//     description: string;
//     guestCount: number;
//     bedroomCount: number;
//     bathroomCount: number;
//     amenities: string[];
//     host: {
//       name: string;
//       email: string;
//     };
//     address: string;
//     latitude: number;
//     longitude: number;
//     rooms: {
//       roomTitle: string;
//       roomImage?: string; // Optional property
//       bedroomCount: number;
//     }[];
//     images: string[];
//     slug: string;
//     id: string;
//   };
// }
// const HotelDetailsPage = () => {
//     return <div>Hotel Details</div>;
//   };
  
//   export default HotelDetailsPage;
// const TestComponent = () => {
//   return <div>Test Page</div>;
// };

// export default TestComponent;
  
// const HotelDetailsPage: React.FC<HotelDetailsProps> = ({ hotelData }) => {
//   if (!hotelData) {
//     return <p>Hotel not found.</p>;
//   }

//   return (
//     <div>
//       <h1>{hotelData.title}</h1>
//       <p>{hotelData.description}</p>
//       <p>
//         Address: {hotelData.address} <br />
//         Bedrooms: {hotelData.bedroomCount}, Bathrooms: {hotelData.bathroomCount}
//       </p>
//       <h3>Amenities:</h3>
//       <ul>
//         {hotelData.amenities.map((amenity, index) => (
//           <li key={index}>{amenity}</li>
//         ))}
//       </ul>
//       <h3>Rooms:</h3>
//       <ul>
//         {hotelData.rooms.map((room, index) => (
//           <li key={index}>
//             {room.roomImage && <img src={room.roomImage} alt={room.roomTitle} width="200" />}
//             <p>{room.roomTitle} - Bedrooms: {room.bedroomCount}</p>
//           </li>
//         ))}
//       </ul>
//       <h3>Host:</h3>
//       <p>
//         Name: {hotelData.host.name} <br />
//         Email: {hotelData.host.email}
//       </p>
//       <p>Coordinates: {hotelData.latitude}, {hotelData.longitude}</p>
//     </div>
//   );
// };

// // Fetch data from the backend API
// export const getServerSideProps: GetServerSideProps = async (context) => {
//   const { slug } = context.params as { slug: string }; // Fetch slug from URL
// //   const apiURL = `http://localhost:3010/api/hotels/${slug}`; // API link
// const apiURL = `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/hotels/${slug}`;

//   try {
//     const res = await fetch(apiURL);
//     if (!res.ok) {
//       throw new Error('Failed to fetch data');
//     }
//     const hotelData = await res.json();

//     return {
//       props: {
//         hotelData,
//       },
//     };
//   } catch (error) {
//     console.error('Error fetching hotel data:', error);
//     return {
//       props: {
//         hotelData: null,
//       },
//     };
//   }
// };

// export default HotelDetailsPage;
