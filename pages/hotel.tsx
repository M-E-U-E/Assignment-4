
// import { GetServerSideProps } from 'next';
// import styles from '../styles/hotel.module.css';

// interface Hotel {
//   title: string;
//   description: string;
//   guestCount: number;
//   bedroomCount: number;
//   bathroomCount: number;
//   amenities: string[];
//   host: {
//     name: string;
//     email: string;
//   };
//   address: string;
//   latitude: number;
//   longitude: number;
//   rooms: {
//     roomTitle: string;
//     bedroomCount: number;
//     roomImage?: string;
//   }[];
//   images: string[];
// }

// interface HotelPageProps {
//   hotel: Hotel | null;
// }

// export const getServerSideProps: GetServerSideProps = async (context) => {
//   const { hotelId } = context.params!;
//   const res = await fetch(`http://localhost:3010/api/hotels/${hotelId}`);
//   const hotel = res.ok ? await res.json() : null;

//   return {
//     props: { hotel },
//   };
// };

// const HotelPage: React.FC<HotelPageProps> = ({ hotel }) => {
//   if (!hotel) {
//     return <div>Hotel not found</div>;
//   }

//   return (
//     <div className={styles.hotelContainer}>
//       {/* Header Section */}
//       <div className={styles.header}>
//         <h1>{hotel.title}</h1>
//         <p>{hotel.description}</p>
//       </div>

//       {/* Image Gallery */}
//       <div className={styles.imageGallery}>
//         {hotel.images && hotel.images.length > 0 ? (
//           hotel.images.map((image, index) => (
//             <img key={index} src={image} alt={`Hotel Image ${index}`} />
//           ))
//         ) : (
//           <p>No images available</p>
//         )}
//       </div>

//       {/* Overview Section */}
//       <div className={styles.overview}>
//         <h2>Overview</h2>
//         <p>
//           <strong>Bedrooms:</strong> {hotel.bedroomCount}
//         </p>
//         <p>
//           <strong>Bathrooms:</strong> {hotel.bathroomCount}
//         </p>
//         <p>
//           <strong>Guests Allowed:</strong> {hotel.guestCount}
//         </p>
//       </div>

//       {/* Amenities Section */}
//       <div className={styles.amenities}>
//         <h2>Amenities</h2>
//         <ul>
//           {hotel.amenities.map((amenity, index) => (
//             <li key={index}>{amenity}</li>
//           ))}
//         </ul>
//       </div>

//       {/* Map Section */}
//       <div className={styles.location}>
//         <h2>Explore the Area</h2>
//         <p>{hotel.address}</p>
//         <iframe
//           src={`https://www.google.com/maps?q=${hotel.latitude},${hotel.longitude}&z=15&output=embed`}
//           width="100%"
//           height="450"
//           style={{ border: 0 }}
//           allowFullScreen
//         ></iframe>
//       </div>

//       {/* Pricing Section */}
//       <div className={styles.pricing}>
//         <h2>Pricing</h2>
//         <p><strong>Price per Night:</strong> $134</p>
//         <p><strong>Total:</strong> $543 (for 2 nights)</p>
//         <button className={styles.bookButton}>Book Now</button>
//       </div>
//     </div>
//   );
// };

// export default HotelPage;