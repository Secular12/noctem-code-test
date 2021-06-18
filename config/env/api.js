module.exports = env => ({
  host: env('API_HOST', 'localhost'),
  port: env('API_PORT', 8000)
})
