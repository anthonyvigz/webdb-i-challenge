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

router.get('/:id', (req, res) => {
  
    const { id } = req.params;
  
    db('accounts').where({ id })
    .then((account) => {
      if (account) {
        res.json(account)
      } else {
        res.status(404).json({ message: 'Could not find account with given ID.' })
      }
    })
    .catch((error) => {
      res.status(500).json({ message: 'Failed to find account.' })
    })
})

router.post('/', (req, res) => {
  
    const account = req.body;
  
    db('accounts').insert({ account })
    .then((array) => {
      if (array) {
        res.json({ message: 'Successfully added a new account.' })
      } else {
        res.status(500).json({ message: 'Could not add the account.' })
      }
    })
    .catch((error) => {
      res.status(400).json({ message: 'Error posting the account.' })
    })
})
  

module.exports = router;