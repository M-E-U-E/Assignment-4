# Assignment04
# Hotel API With front-end

A full-stack application with a backend API.

## Table of Contents
- [Description](#description)
- [Git Clone Instructions](#git-clone-instructions)
- [Features](#features)
- [Project Structure](#project-structure)
- [Technologies Used](#technologies-used)
- [Schema](#schema)
- [Dependencies](#dependencies)


## Description

A full-stack application with a backend API built using TypeScript, Node.js, and Express.js for hotel data management, including image handling and endpoint testing, and a React-Next.js frontend for displaying the data.

## Git Clone Instructions

To clone this project to your local machine, follow these steps:

here is the api link : https://github.com/M-E-U-E/hotel-api
follow the instruction for the api

1. **Open terminal (Command Prompt, PowerShell, or Terminal)**
2. **Clone the repository**: git clone https://github.com/M-E-U-E/Assignment-4.git
   
    Go to the Directory:
    ```bash
    cd Assignment-4
    ```
    Install dependencies:
    ```bash
    npm install
    ```
    Install TypeScript and type definitions:
    ```bash
    npm install --save-dev typescript @types/express @types/multer @types/jest
    ```
    Compile TypeScript files:
    ```bash
    npx tsc
    ```
    If the package.json includes a  dev script, use:
    ```bash
    npm run dev
    ```
    
    Run the backend api:
   
    then it will connect to the frontend
    
    
    
    #### Now open POSTMAN to check API Endpoints
   
## Features

### Endpoint Operations & Testing Guide

#### GET /hotels - Retrieve All Hotels
```bash
Method: GET
URL: http://localhost:3010/api/hotels
```
Test Steps:
1. Create new request in Postman
2. Select "GET"
3. Enter URL
4. Click "Send"


## Project Structure

```
HOTEL-DETAILS/
├── app/
│   ├── favicon.ico
│   ├── globals.css
│   ├── hotel.module.css
│   ├── index.tsx
│   ├── layout.tsx
│   └── types/
│       └── index.ts
├── components/
│   ├── Amenities.tsx
│   ├── AmenitiesList.tsx
│   ├── BookingCard.tsx
│   ├── Footer.tsx
│   ├── Header.tsx
│   ├── HotelDetails.tsx
│   ├── ImageGallery.tsx
│   ├── Location.tsx
│   └── RoomList.tsx
├── node_modules/
├── pages/
├── public/
├── styles/
│   ├── components.module.css
│   ├── global.css
│   └── hotel.module.css
├── tests/
│   └── HotelDetails.test.tsx
├── .env.local
├── .eslintrc.json
├── .gitignore
├── next-env.d.ts
├── next.config.ts
├── package-lock.json
├── package.json
├── postcss.config.mjs
├── README.md
├── tailwind.config.ts
└── tsconfig.json

```

## Technologies Used

- **Node.js: Runtime environment for server-side application execution
- **Express.js: Web application framework for handling routes and HTTP requests
- **TypeScript: Programming language for type safety and enhanced developmentNext.js: React framework for server-side rendering and static site generation
- **Jest: Testing framework for unit and integration tests
- **Supertest: HTTP endpoint testing library
- **File System (fs): Node.js module for file operations
- **React.js: Frontend library for building interactive user interfaces
- **Next.js: React framework for server-side rendering and static site generation
  
    
## Schema
```json
{
  "type": "object",
  "properties": {
    "hotel_id": { "type": "string" },
    "slug": { "type": "string" },
    "images": {
      "type": "array",
      "items": { "type": "string" }
    },
    "title": { "type": "string" },
    "description": { "type": "string" },
    "guest_count": { "type": "integer" },
    "bedroom_count": { "type": "integer" },
    "bathroom_count": { "type": "integer" },
    "amenities": {
      "type": "array",
      "items": { "type": "string" }
    },
    "host_information": {
      "type": "object",
      "properties": {
        "name": { "type": "string" },
        "contact": { "type": "string" }
      },
      "required": ["name", "contact"]
    },
    "address": { "type": "string" },
    "latitude": { "type": "number" },
    "longitude": { "type": "number" },
    "rooms": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "hotel_slug": { "type": "string" },
          "room_slug": { "type": "string" },
          "room_image": { "type": "string" },
          "room_title": { "type": "string" },
          "bedroom_count": { "type": "integer" }
        },
        "required": ["hotel_slug", "room_slug", "room_image", "room_title", "bedroom_count"]
      }
    }
  },
  "required": ["hotel_id", "slug", "title", "description", "guest_count", "bedroom_count", "bathroom_count", "amenities", "host_information", "address", "latitude", "longitude", "rooms"]
}
```

## Dependencies

- **Node.js & Express.js**: Core framework and runtime
- **TypeScript**: Programming language and its dependencies
- **Jest & Supertest**: Testing frameworks
- **File System Module**: Built-in Node.js module
- **React.js: Library for building user interfaces
- **Next.js: Framework for server-side rendering and static site generation
