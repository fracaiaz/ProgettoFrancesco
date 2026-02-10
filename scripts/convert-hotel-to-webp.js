import sharp from 'sharp';
import { existsSync } from 'fs';

const input = 'src/assets/hotel.png';
const output = 'src/assets/hotel.webp';

const run = async () => {
  if (!existsSync(input)) {
    console.error('Input file not found:', input);
    process.exit(1);
  }

  try {
    await sharp(input)
      .webp({ quality: 90 })
      .toFile(output);
    console.log('Created', output);
  } catch (err) {
    console.error('Conversion failed:', err);
    process.exit(1);
  }
};

run();
