import sharp from 'sharp';

const input = 'src/assets/chiesa.png';
const output = 'src/assets/chiesa.webp';

async function convertChiesa() {
  try {
    const info = await sharp(input)
      .resize(400, 400, { // Ridimensiona per ridurre size
        fit: 'inside',
        withoutEnlargement: true
      })
      .webp({ 
        quality: 85, // Buona qualità ma dimensione ridotta
        effort: 6    // Massima compressione
      })
      .toFile(output);
    
    console.log(`✓ Creata ${output}`);
    console.log(`  Dimensioni: ${info.width}x${info.height}`);
    console.log(`  Size: ${(info.size / 1024).toFixed(2)} KB`);
    
  } catch (error) {
    console.error('Errore:', error);
  }
}

convertChiesa();
