import { readdirSync } from 'fs';
import path from 'path';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const publicDir = path.join(process.cwd(), 'public', '3D');
    const files = readdirSync(publicDir);
    const imageFiles = files.filter(file => 
      file.toLowerCase().endsWith('.png') || 
      file.toLowerCase().endsWith('.jpg') || 
      file.toLowerCase().endsWith('.jpeg') ||
      file.toLowerCase().endsWith('.webp') ||
      file.toLowerCase().endsWith('.svg')
    );
    
    return NextResponse.json({ images: imageFiles });
  } catch (error) {
    console.error('Error reading 3D folder:', error);
    return NextResponse.json({ images: [] });
  }
}