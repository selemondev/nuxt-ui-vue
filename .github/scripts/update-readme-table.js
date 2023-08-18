/* eslint-disable no-console */
/* eslint-disable n/prefer-global/process */
const fs = require('node:fs')
const path = require('node:path')

const packageJsonPath = path.join(__dirname, '../../package.json') // Adjust the path based on your project structure
const readmePath = path.join(__dirname, '../../README.md')

// Read the package.json file
fs.readFile(packageJsonPath, 'utf8', (err, packageJsonData) => {
  if (err) {
    console.error(err)
    process.exit(1)
  }

  const packageJson = JSON.parse(packageJsonData)
  const newNuxtUIVueVersion = packageJson.version

  // Read the README file
  fs.readFile(readmePath, 'utf8', (readmeErr, data) => {
    if (readmeErr) {
      console.error(readmeErr)
      process.exit(1)
    }
    const existingTableRegex = /\| nuxt-ui\s+\| nuxt-ui-vue\s+\|\s+\|[^]*?\|/m
    const updatedTableRow = `| nuxt-ui          | nuxt-ui-vue      |\n|------------------|------------------|\n| v2.7.0           | v${newNuxtUIVueVersion.padEnd(16)} |`.trim() // <-- Remove trailing whitespace

    const updatedData = data.replace(existingTableRegex, updatedTableRow)

    fs.writeFile(readmePath, updatedData, 'utf8', (writeErr) => {
      if (writeErr) {
        console.error('Error writing README:', writeErr)
        process.exit(1)
      }

      console.log('README table updated successfully.')
    })
  })
})
