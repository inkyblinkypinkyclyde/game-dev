const express = require('express');
const ObjectId = require('mongodb').ObjectId;


const createRouter = function (collection) {

  const router = express.Router();

  router.get('/', (req, res) => {
    collection
    .find()
    .toArray()
    .then((docs) => res.json(docs))
    .catch((err) =>{
      res.status(500);
      res.json({status: 500, error: err});
    })
  });

  router.put('/:id', (req, res) => {
    const id = req.params.id;
    const updatedData = req.body;
    collection
    .updatedOne(
      { _id: ObjectId(id) },
      { $set: updatedData }
    )
    .then((result) => {
      res.json(result)
    })
    .catch((err) => {
      console.error(err)
      res.statusMessage(500)
      res.json({status: 500, error: err})
    })
  })

  return router;
};

module.exports = createRouter;