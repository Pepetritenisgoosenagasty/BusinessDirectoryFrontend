const PORT = 8000
const axios = require('axios').default
const express = require('express')
const cors = require('cors')
require('dotenv').config()
const app = express()

app.use(cors())

app.get('/placesDetails', async (req, res) => {
  const { place_id, apiKey } = req.params
  console.log(req.body)

  const options = {
    method: 'GET',
  }

  try {
    const response = await axios(
     `https://maps.googleapis.com/maps/api/place/details/json?place_id=${place_id}&key=${apiKey}`,
      options
    )
    res.status(200).json(response.data)
  } catch (err) {
    console.log(err)
    res.status(500).json({ message: err })
  }
})

app.listen(PORT, () => console.log('Server running on port ' + PORT))