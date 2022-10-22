const router = require('express').Router()
const coin = require('../services/coin')

router.get('/:id/history', async (req, res) => {
  const id = req.params.id
  const params = req.query
  const data = await coin.getCoinHistory(id, params)
  res.json(data)
})

router.get('/:id', async (req, res) => {
  const id = req.params.id
  const params = req.query
  const data = await coin.getCoin(id, params)
  res.json(data)
})

module.exports = router
