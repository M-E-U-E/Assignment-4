// // tests/HotelDetails.test.tsx
// import { render, screen } from '@testing-library/react';
// import HotelDetails from '../components/HotelDetails';

// const mockData = {
//   name: 'Radisson Blu',
//   description: 'Luxury hotel with river views.',
//   location: 'Downtown',
//   images: ['/image1.jpg', '/image2.jpg'],
//   amenities: ['Free WiFi', 'Pool', 'Spa'],
// };

// test('renders hotel details correctly', () => {
//   render(
//     <HotelDetails
//       name={mockData.name}
//       description={mockData.description}
//       location={mockData.location}
//       images={mockData.images}
//       amenities={mockData.amenities}
//     />
//   );

//   expect(screen.getByText(/Radisson Blu/i)).toBeInTheDocument();
//   expect(screen.getByText(/Luxury hotel with river views./i)).toBeInTheDocument();
//   expect(screen.getByText(/Downtown/i)).toBeInTheDocument();
// });
