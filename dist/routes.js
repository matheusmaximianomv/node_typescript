"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express');

var _UserController = require('./app/controllers/UserController'); var _UserController2 = _interopRequireDefault(_UserController);

const routes = _express.Router.call(void 0, )

routes.get('/', (request, response) => {
  return response.status(200).json({
    name: 'node_typescript',
    version: '1.0.0',
    description: 'Mini curso de node com typescript'
  })
})

routes.get('/users', _UserController2.default.index)

exports. default = routes
