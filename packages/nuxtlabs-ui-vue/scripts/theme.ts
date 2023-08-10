import fs from 'node:fs'

fs.mkdirSync('./dist/theme', { recursive: true })
fs.copyFileSync('./src/theme/nuxtLabsTheme.ts', './dist/theme/nuxtLabsTheme.ts')
fs.copyFileSync('./src/theme/nuxtLabsTheme.ts', './dist/theme/nuxtLabsTheme.js')
