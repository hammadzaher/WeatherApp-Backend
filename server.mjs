import express from 'express';
import cors from 'cors'; // ✅ STEP 1: cors import karo

const app = express();
const port = 5000;

// ✅ STEP 2: cors middleware use karo
app.use(cors({
  origin: ['http://localhost:5173', 'https://your-netlify-app.netlify.app'], // frontend URLs
  methods: ['GET', 'POST'],
}));

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/get-weather/:cityName', (req, res) => {
  const city = req.params.cityName.toLowerCase();
  let apiRes = {};

  if (city == "karachi") {
    apiRes = {
      "city": city,
      "temperature": 40,
      "humidity": 39,
      "wind": "50 km/h",
      "min": 30,
      "max": 42,
      "feelslike": 45
    };
  } else if (city == "lahore") {
    apiRes = {
      "city": city,
      "temperature": 40,
      "humidity": 39,
      "wind": "50 km/h",
      "min": 30,
      "max": 42,
      "feelslike": 45
    };
  } else {
    apiRes = {
      "city": city,
      "temperature": 40,
      "humidity": 39,
      "wind": "50 km/h",
      "min": 30,
      "max": 42,
      "feelslike": 45
    };
  }

  res.send(apiRes);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
