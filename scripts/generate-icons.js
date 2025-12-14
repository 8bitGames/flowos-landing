#!/usr/bin/env node
/**
 * Script to generate favicon.ico and PNG icons from SVG
 *
 * Usage:
 *   npm install sharp --save-dev
 *   node scripts/generate-icons.js
 */

const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const svgPath = path.join(__dirname, '../public/logo/symbol.svg');
const outputDir = path.join(__dirname, '../public/logo');

async function generateIcons() {
  console.log('Generating icons from SVG...');

  const svgBuffer = fs.readFileSync(svgPath);

  // Generate Apple Touch Icon (180x180)
  await sharp(svgBuffer)
    .resize(180, 180)
    .png()
    .toFile(path.join(outputDir, 'apple-touch-icon.png'));
  console.log('Created: apple-touch-icon.png (180x180)');

  // Generate PWA icons
  await sharp(svgBuffer)
    .resize(192, 192)
    .png()
    .toFile(path.join(outputDir, 'icon-192.png'));
  console.log('Created: icon-192.png (192x192)');

  await sharp(svgBuffer)
    .resize(512, 512)
    .png()
    .toFile(path.join(outputDir, 'icon-512.png'));
  console.log('Created: icon-512.png (512x512)');

  // Generate favicon sizes
  const faviconSizes = [16, 32, 48];
  for (const size of faviconSizes) {
    await sharp(svgBuffer)
      .resize(size, size)
      .png()
      .toFile(path.join(outputDir, `favicon-${size}.png`));
    console.log(`Created: favicon-${size}.png (${size}x${size})`);
  }

  // Generate favicon.ico (multi-resolution)
  // Note: For proper .ico files, you may need to use a separate tool like 'png-to-ico'
  // For now, we create a 32x32 PNG that can be used as favicon
  await sharp(svgBuffer)
    .resize(32, 32)
    .png()
    .toFile(path.join(__dirname, '../public/favicon.png'));
  console.log('Created: favicon.png (32x32)');

  // Copy 32x32 as favicon.ico (browsers accept PNG with .ico extension)
  const favicon32 = await sharp(svgBuffer)
    .resize(32, 32)
    .png()
    .toBuffer();
  fs.writeFileSync(path.join(__dirname, '../public/favicon.ico'), favicon32);
  console.log('Created: favicon.ico');

  console.log('\nAll icons generated successfully!');
  console.log('\nNote: For best .ico compatibility, consider using https://realfavicongenerator.net/');
}

generateIcons().catch(console.error);
