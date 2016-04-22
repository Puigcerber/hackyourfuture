'use strict';

var db = require('../../db');
var Hacker = db.import(__dirname + '/hacker.model.js');

exports.index = function(req, res) {
  Hacker.findAll().then(function(hackers) {
    res.json(hackers);
  });
};

exports.show = function(req, res) {
  Hacker.findById(req.params.id).then(function(hacker) {
    res.json(hacker);
  });
};

exports.create = function(req, res) {
  Hacker.create(req.body).then(function(hacker) {
    return res.status(201).json(hacker);
  });
};

exports.update = function(req, res) {
  Hacker.update(req.body, { where: { id: req.params.id }}).then(function(updates) {
    return res.send(updates);
  });
};

exports.destroy = function(req, res) {
  Hacker.destroy({ where: { id: req.params.id }}).then(function() {
    console.log('ola');
    return res.status(204);
  });
};
