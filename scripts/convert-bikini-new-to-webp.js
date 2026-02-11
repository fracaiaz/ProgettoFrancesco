import sharp from 'sharp';
import { existsSync } from 'fs';

const input = 'src/assets/bikini_new.png';
const output = 'src/assets/bikini_new.webp';

const run = async () => {
  if (!existsSync(input)) {
    console.error('Input file not found:', input);
    process.exit(1);
  }

  try {
    console.log('Converting bikini_new.png to WebP format...');
    
    await sharp(input)
      .webp({ 
        quality: 85,
        effort: 6
      })
      .toFile(output);

    console.log('✓ Successfully converted to:', output);
    
    // Show file sizes
    const { statSync } = await import('fs');
    const inputSize = (statSync(input).size / 1024 / 1024).toFixed(2);
    const outputSize = (statSync(output).size / 1024 / 1024).toFixed(2);
    console.log(`  Input:  ${inputSize} MB`);
    console.log(`  Output: ${outputSize} MB`);
    console.log(`  Saved:  ${((inputSize - outputSize) / inputSize * 100).toFixed(1)}%`);
  } catch (error) {
    console.error('Error during conversion:', error);
    process.exit(1);
  }
};

run();
