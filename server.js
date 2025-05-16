/* eslint-disable max-len */
import dotenv from 'dotenv'

import express from 'express'
import fetch from 'node-fetch'

dotenv.config()

// eslint-disable-next-line node/prefer-global/process
const API_KEY = process.env.VITE_API_KEY
const app = express()
const PORT = 3001

app.use(require('cors')({
  origin: 'https://weather-app-vue-iota.vercel.app', // точный домен
  credentials: true,
}))

app.get('/api/weather', async (req, res) => {
  const { q, lat, lon } = req.query
  let url = ''

  if (!q && (!lat && !lon))
    return res.status(400).json({ error: 'City is required' })

  if (q) {
    url = `https://api.openweathermap.org/data/2.5/weather?q=${q}&appid=${API_KEY}&units=metric`
  }
  else if (lat && lon) {
    url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
  }

  try {
    const response = await fetch(url)
    const data = await response.json()
    res.json(data)
  }
  catch (error) {
    res.status(500).json({ error: `Something went wrong ${error}` })
  }
})

app.get('/api/search', async (req, res) => {
  const city = req.query.q
  if (!city)
    return res.status(400).json({ error: 'City is required' })

  const url = `https://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=5&appid=${API_KEY}`

  try {
    const response = await fetch(url)
    const data = await response.json()
    res.json(data)
  }
  catch (error) {
    res.status(500).json({ error: `Something went wrong ${error}` })
  }
})

app.get('/api/forecast', async (req, res) => {
  const { lat, lon } = req.query
  if (!lat || !lon)
    return res.status(400).json({ error: 'Lat and Lot is required' })

  const url = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric&cnt=8`

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
