// // app/types/index.ts (create this file if it doesn't exist)

// export interface Room {
//     roomTitle: string;
//     bedroomCount: number;
//     roomImage?: string;
//   }
  
//   export interface Host {
//     name: string;
//     email: string;
//   }
  
//   export interface Hotel {
//     id: string;
//     title: string;
//     description: string;
//     guestCount: number;
//     bedroomCount: number;
//     bathroomCount: number;
//     amenities: string[];
//     host: Host;
//     address: string;
//     latitude: number;
//     longitude: number;
//     rooms: Room[];
//     slug: string;
//     images: string[];
//   }
// types/index.ts
export interface Room {
    hotelSlug: string;
    roomSlug: string;
    roomImage: string;
    roomTitle: string;
    bedroomCount: number;
  }
  
  export interface Hotel {
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