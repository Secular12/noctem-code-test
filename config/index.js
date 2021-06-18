const fs = require('fs')
const path = require('path')

const normalizedPath = path.join(__dirname, '/env')

const configFiles = fs.readdirSync(normalizedPath)

// Error if the .env file does not exist
if (!fs.existsSync(path.join(__dirname, '../.env'))) throw new Error('.env is missing')

// get and parse the .env file
const dotenv = require('dotenv').config({ path: path.resolve(__dirname, '../.env') })

const parsedEnv = require('dotenv-parse-variables')(dotenv.parsed)

// Create callback function for the config files to use
// accepts the environment variable name and the default value
const env = (envVar, defaultValue = null) => {
  if (parsedEnv[envVar] === 0 || parsedEnv[envVar] === false) return parsedEnv[envVar]
  return parsedEnv[envVar] || defaultValue
}

module.exports = configFiles.reduce((acc, fileName) => {
  const groupProperty = fileName.split('.js')[0]

  if (groupProperty === 'misc') {
    return { ...acc, ...require('./env/misc')(env) }
  }

  return { ...acc, [groupProperty]: require(`./env/${fileName}`)(env) }
}, {})
