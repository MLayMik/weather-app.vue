import cors from 'cors'

import dotenv from 'dotenv'

import express from 'express'
import fetch from 'node-fetch'

dotenv.config()

// eslint-disable-next-line node/prefer-global/process
const API_KEY = process.env.VITE_API_KEY
const app = express()
const PORT = 3001

app.use(cors())

app.get('/weather', async (req, res) => {
  const city = req.query.q
  if (!city)
    return res.status(400).json({ error: 'City is required' })

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`

  try {
    const response = await fetch(url)
    const data = await response.json()
    res.json(data)
  }
  catch (error) {
    res.status(500).json({ error: `Something went wrong ${error}` })
  }
})

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Server is running on http://localhost:${PORT}, ${API_KEY}`)
})
