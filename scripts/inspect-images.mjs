import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

async function main() {
  const onlineFiles = [
    'Ezoketho Mapetla _26-21.jpg',
    'Ezoketho Mapetla _26-22.jpg',
    'Ezoketho Mapetla _26-25.jpg',
    'Ezoketho Mapetla _26-29.jpg',
    'Ezoketho Mapetla _26-34.jpg',
    'Ezoketho Mapetla _26-5.jpg'
  ];

  // Mapetla-26 shoot had 46 photos.
  // Let's compare all 46 mapetla images with online files to see which mapetla_N.jpg matches which online file
  for (let i = 1; i <= 46; i++) {
    const mapetlaFile = `public/images/ezokhetho/mapetla/mapetla_${i}.jpg`;
    const meta = await sharp(mapetlaFile).metadata();
    const stats = await sharp(mapetlaFile).stats();
    console.log(`mapetla_${i}: ${meta.width}x${meta.height}, dom: rgb(${stats.dominant.r},${stats.dominant.g},${stats.dominant.b})`);
  }
}

main().catch(console.error);
