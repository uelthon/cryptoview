const router = require('express').Router()
const coinServices = require('../services/coins')

router.get('/', async (req, res) => {
  const query = req.query
  const data = await coinServices.getAll({
    ...query,
    'tiers[0]': '1'
  })
  res.json(data)
})

router.get('/recap', async (req, res) => {
  const query = req.query
  const data = await coinServices.getRecap(query)
  res.json(data)
})

module.exports = router
