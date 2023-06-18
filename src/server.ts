import { app } from './app'
import 'dotenv/config'

const port = process.env.PORT || 3000

app
  .listen({
    port: 3000,
  })
  .then(() => {
    console.log(`HTTP Server running on port ${port}`)
  })
