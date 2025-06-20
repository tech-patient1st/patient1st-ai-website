import { NextResponse } from 'next/server';
import { promises as fs } from 'fs';
import { join } from 'path';

export async function GET() {
  try {
    // Path to the logo file
    const logoPath = join(process.cwd(), 'public', 'image', 'patient1st-fleur.svg');
    
    // Read the SVG file asynchronously
    const svgContent = await fs.readFile(logoPath, 'utf-8');
    
    // Return the SVG with proper headers for email linking
    return new NextResponse(svgContent, {
      status: 200,
      headers: {
        'Content-Type': 'image/svg+xml',
        'Access-Control-Allow-Origin': '*',
        'Cache-Control': 'public, max-age=31536000, immutable',
        'Content-Disposition': 'inline; filename="patient1st-logo.svg"',
      },
    });
  } catch (error) {
    console.error('Error serving logo:', error);
    return new NextResponse('Logo not found', { 
      status: 404,
      headers: {
        'Content-Type': 'text/plain',
      }
    });
  }
} 