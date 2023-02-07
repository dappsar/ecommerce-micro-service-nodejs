const dotEnv = require("dotenv")

console.log(process.env.NODE_ENV)

if (process.env.NODE_ENV !== "prod") {
  const configFile = `./.env.${process.env.NODE_ENV || 'dev'}`
  dotEnv.config({ path: configFile })
} else {
  dotEnv.config()
}

console.log(process.env.MONGODB_URI)

module.exports = {
  PORT: process.env.PORT,
  DB_URL: process.env.MONGODB_URI,
  APP_SECRET: process.env.APP_SECRET,
}
