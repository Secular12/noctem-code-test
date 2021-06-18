module.exports = env => ({
  url: env('DB_URL', 'mongodb://localhost/test')
})