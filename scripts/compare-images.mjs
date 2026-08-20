import fs from 'fs';
import sharp from 'sharp';

async function compareImages() {
  // Let's generate small 16x16 RGB buffers for each image to compute perceptual difference between consecutive images
  const thumbs = [];
  for (let i = 1; i <= 46; i++) {
    const file = `public/images/ezokhetho/mapetla/mapetla_${i}.jpg`;
    const buf = await sharp(file).resize(32, 32, { fit: 'fill' }).raw().toBuffer();
    thumbs.push({ index: i, buf });
  }

  // Compare each image with every other image
  function diff(a, b) {
    let sum = 0;
    for (let i = 0; i < a.length; i++) {
      sum += Math.abs(a[i] - b[i]);
    }
    return sum / a.length;
  }

  // Find clusters/groups:
  // Key reference points:
  // mapetla_5 is Ta-Da Trench Coat (also mapetla_34 is Ta-Da Trench Coat)
  // mapetla_21 & 22 is Mapetla Pixie
  // mapetla_25 & 29 is Mapetla One-Shoulder Asymmetric Bubble Dress

  console.log('--- Similarity with Mapetla Pixie (mapetla_21) ---');
  for (let i = 1; i <= 46; i++) {
    const d = diff(thumbs[20].buf, thumbs[i-1].buf);
    if (d < 40) console.log(`mapetla_${i}: diff = ${d.toFixed(1)}`);
  }

  console.log('--- Similarity with Bubble Dress (mapetla_25) ---');
  for (let i = 1; i <= 46; i++) {
    const d = diff(thumbs[24].buf, thumbs[i-1].buf);
    if (d < 40) console.log(`mapetla_${i}: diff = ${d.toFixed(1)}`);
  }

  console.log('--- Similarity with Ta-Da Trench (mapetla_5) ---');
  for (let i = 1; i <= 46; i++) {
    const d = diff(thumbs[4].buf, thumbs[i-1].buf);
    if (d < 40) console.log(`mapetla_${i}: diff = ${d.toFixed(1)}`);
  }

  console.log('--- Similarity with Ta-Da Trench (mapetla_34) ---');
  for (let i = 1; i <= 46; i++) {
    const d = diff(thumbs[33].buf, thumbs[i-1].buf);
    if (d < 40) console.log(`mapetla_${i}: diff = ${d.toFixed(1)}`);
  }
}

compareImages().catch(console.error);
