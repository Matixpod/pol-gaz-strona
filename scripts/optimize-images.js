const sharp = require('sharp')
const fs = require('fs')
const path = require('path')

async function optimizeImages() {
  const inputDir = 'public/images'
  const outputDir = 'public/images/optimized'
  
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true })
  }
  
  const files = fs.readdirSync(inputDir)
  
  for (const file of files) {
    if (file.match(/\.(jpg|jpeg|png)$/i)) {
      await sharp(path.join(inputDir, file))
        .webp({ quality: 80 })
        .toFile(path.join(outputDir, file.replace(/\.(jpg|jpeg|png)$/i, '.webp')))
      
      console.log(`Optimized: ${file} -> ${file.replace(/\.(jpg|jpeg|png)$/i, '.webp')}`)
    }
  }
}

optimizeImages().catch(console.error)
