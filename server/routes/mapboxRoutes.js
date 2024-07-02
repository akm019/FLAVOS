import express from 'express';
import axios from 'axios';
import dotenv from 'dotenv';
dotenv.config();

const router = express.Router();

router.get('/suggest', async (req, res) => {
  const searchText = req.query.q;
  const mapboxToken = process.env.MAPBOX_API_KEY;

  try {
    const response = await axios.get(`https://api.mapbox.com/search/searchbox/v1/suggest`, {
      params: {
        q: searchText,
        access_token: mapboxToken,
      },
    });

    res.json(response.data);
  } catch (error) {
    console.error('Error fetching address suggestions:', error);
    res.status(500).json({ message: 'Failed to fetch address suggestions' });
  }
});

export default router;
