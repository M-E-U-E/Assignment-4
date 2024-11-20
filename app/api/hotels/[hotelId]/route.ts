import { NextResponse } from 'next/server';

export async function GET(
  request: Request,
  { params }: { params: { hotelId: string } }
) {
  try {
    const response = await fetch(`http://localhost:3010/api/hotels/${params.hotelId}`);
    const data = await response.json();

    if (!response.ok) {
      return NextResponse.json({ error: 'Hotel not found' }, { status: 404 });
    }

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
