module.exports = function(app) {
  var express = require('express');
  var notebooksRouter = express.Router();

  notebooksRouter.get('/', function(req, res) {
    res.send({
      'notebooks': []
    });
  });

  notebooksRouter.post('/', function(req, res) {
    res.status(201).end();
  });

  notebooksRouter.get('/:id', function(req, res) {
    res.send({
      'notebooks': {
        id: req.params.id
      }
    });
  });

  notebooksRouter.put('/:id', function(req, res) {
    res.send({
      'notebooks': {
        id: req.params.id
      }
    });
  });

  notebooksRouter.delete('/:id', function(req, res) {
    res.status(204).end();
  });

  app.use('/api/notebooks', notebooksRouter);
};
