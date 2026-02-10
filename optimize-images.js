import sharp from 'sharp';
import { readdir, stat } from 'fs/promises';
import { join } from 'path';

const assetsDir = './src/assets';

async function optimizeImages() {
  const files = await readdir(assetsDir);
  
  for (const file of files) {
    if (file.endsWith('.png') || file.endsWith('.jpg') || file.endsWith('.jpeg')) {
      const inputPath = join(assetsDir, file);
      const stats = await stat(inputPath);
      const sizeInMB = stats.size / (1024 * 1024);
      
      // Se il file è più grande di 200KB, ottimizzalo
      if (sizeInMB > 0.2) {
        console.log(`Ottimizzazione di ${file} (${sizeInMB.toFixed(2)}MB)...`);
        
        await sharp(inputPath)
          .webp({ quality: 80 })
          .toFile(inputPath.replace(/\.(png|jpg|jpeg)$/, '.webp'));
          
        console.log(`✓ Convertito in WebP: ${file.replace(/\.(png|jpg|jpeg)$/, '.webp')}`);
      }
    }
  }
  
  console.log('Ottimizzazione completata!');
}

optimizeImages().catch(console.error);
