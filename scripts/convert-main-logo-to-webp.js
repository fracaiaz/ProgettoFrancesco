import sharp from 'sharp';
import { existsSync } from 'fs';

const input = 'src/assets/main_logo.jpeg';
const output = 'src/assets/main_logo.webp';

const run = async () => {
  if (!existsSync(input)) {
    console.error('Input file not found:', input);
    process.exit(1);
  }

  try {
    await sharp(input)
      .removeAlpha()
      .ensureAlpha()
      .raw()
      .toBuffer({ resolveWithObject: true })
      .then(({ data, info }) => {
        // Make white/nearly-white pixels transparent
        for (let i = 0; i < data.length; i += 4) {
          const r = data[i];
          const g = data[i + 1];
          const b = data[i + 2];
          
          // If pixel is nearly white (threshold 240), make it transparent
          if (r > 240 && g > 240 && b > 240) {
            data[i + 3] = 0; // Set alpha channel to 0 (transparent)
          }
        }
        
        return sharp(data, {
          raw: {
            width: info.width,
            height: info.height,
            channels: 4
          }
        })
        .webp({ quality: 90 })
        .toFile(output);
      });
    console.log('Created', output, 'with transparent background');
  } catch (err) {
    console.error('Conversion failed:', err);
    process.exit(1);
  }
};

run();
