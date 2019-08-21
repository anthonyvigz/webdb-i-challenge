const router = require('express').Router();

const db = require('../data/dbConfig.js');

router.get('/', (req, res) => {
    db('accounts')
    .then((accounts) => {
      res.json(accounts)
    })
    .catch((error) => {
      res.status(500).json({ message: 'Failed to get users.' })
    })
})



module.exports = router;