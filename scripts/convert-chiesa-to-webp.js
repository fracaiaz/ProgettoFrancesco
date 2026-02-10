import sharp from 'sharp';
import { existsSync } from 'fs';

const input = 'src/assets/chiesa.png';
const output = 'src/assets/chiesa.webp';

const run = async () => {
  if (!existsSync(input)) {
    console.error('Input file not found:', input);
    process.exit(1);
  }

  try {
    const bgColor = { r: 253, g: 251, b: 247 }; // #FDFBF7
    
    // Get image buffer with transparency flattened and process pixels
    const { data, info } = await sharp(input)
      .flatten({ background: bgColor }) // First flatten any transparency
      .raw()
      .toBuffer({ resolveWithObject: true });
    
    // Replace all white/light pixels with background color
    for (let i = 0; i < data.length; i += 3) {
      const r = data[i];
      const g = data[i + 1];
      const b = data[i + 2];
      
      // If pixel is light colored (threshold 240), replace with background color
      if (r > 240 && g > 240 && b > 240) {
        data[i] = bgColor.r;
        data[i + 1] = bgColor.g;
        data[i + 2] = bgColor.b;
      }
    }
    
    // Create final image without alpha channel
    await sharp(data, {
      raw: {
        width: info.width,
        height: info.height,
        channels: 3
      }
    })
    .webp({ quality: 90 })
    .toFile(output);
    
    console.log('Created', output, 'with all white pixels replaced with card color');
  } catch (err) {
    console.error('Conversion failed:', err);
    process.exit(1);
  }
};

run();
