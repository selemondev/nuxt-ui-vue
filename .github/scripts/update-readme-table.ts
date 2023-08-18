import fs from 'node:fs'
import path from 'node:path'
import process from 'node:process'

const packageJsonPath = path.join(__dirname, '../../packages/nuxt-ui-vue/package.json') // Adjust the path based on your project structure
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

    // Regular expression to match the table row with nuxt-ui-vue version
    const regex = /\| nuxt-ui\s+\| nuxt-ui-vue\s+\|\s+\| [^|]*\s+\| [^|]*\s+\|/

    // Create the replacement table row with updated nuxt-ui-vue version
    const newTableRow = `| nuxt-ui          | nuxt-ui-vue      |\n|------------------|------------------|\n| v2.7.0           | v${newNuxtUIVueVersion}           |`

    // Replace the old table row with the new one
    const updatedData = data.replace(regex, newTableRow)

    // Write the updated content back to the README file
    fs.writeFile(readmePath, updatedData, 'utf8', (writeErr) => {
      if (writeErr) {
        console.error(writeErr)
        process.exit(1)
      }

      // eslint-disable-next-line no-console
      console.log('README table updated successfully.')
    })
  })
})
