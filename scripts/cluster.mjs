import fs from 'fs';
import sharp from 'sharp';

async function clusterImages() {
  const thumbs = [];
  for (let i = 1; i <= 46; i++) {
    const file = `public/images/ezokhetho/mapetla/mapetla_${i}.jpg`;
    const buf = await sharp(file).resize(32, 32, { fit: 'fill' }).raw().toBuffer();
    thumbs.push({ index: i, buf });
  }

  function diff(a, b) {
    let sum = 0;
    for (let i = 0; i < a.length; i++) sum += Math.abs(a[i] - b[i]);
    return sum / a.length;
  }

  // Find natural sequence cuts where consecutive image difference jumps
  console.log('=== Consecutive Differences ===');
  for (let i = 1; i < 46; i++) {
    const d = diff(thumbs[i-1].buf, thumbs[i].buf);
    console.log(`mapetla_${i} -> mapetla_${i+1}: ${d.toFixed(1)}`);
  }
}

clusterImages().catch(console.error);
