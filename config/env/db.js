module.exports = env => ({
  url: env('DB_URL', 'mongodb://localhost:27017'),
  user: env('DB_USER', 'rootuser'),
  password: env('DB_PASSWORD', 'rootpass')
})