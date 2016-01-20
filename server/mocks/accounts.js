/*jshint node:true*/
module.exports = function(app) {
  var express = require('express');
  var accountsRouter = express.Router();

  var bodyParser = require('body-parser');
  app.use(bodyParser.json());
  var nedb = require('nedb');
  var accountDB = new nedb({ filename: 'accounts', autoload: true});

  accountsRouter.get('/', function(req, res) {
    accountDB.find({login: req.param('login')}).exec(function(error,accounts) {
      if (accounts.length == 0) {
        res.sendStatus(404);
      } else {
        res.send({
          'token': 'testToken',
          'account': accounts[0]
        });
      }
    });
  });

  accountsRouter.post('/', function(req, res) {
    accountDB.find({}).sort({id: -1}).limit(1).exec( function(err, accounts) {
      console.log(req.body);
      if (accounts.length !== 0) {
        req.body.account.id = accounts[0].id + 1;
      } else {
        req.body.account.id = 1;
      }

      accountDB.insert(req.body.account, function(err, newAccount) {
        res.status(201);
        res.send(
          JSON.stringify(
          {
            account: newAccount
          })
        );
      });
    });
  });

  accountsRouter.get('/:id', function(req, res) {
    res.send({
      'accounts': {
        id: req.params.id
      }
    });
  });

  accountsRouter.put('/:id', function(req, res) {
  });

  accountsRouter.delete('/:id', function(req, res) {
    res.status(204).end();
  });

  app.use('/api/accounts', accountsRouter);
};
