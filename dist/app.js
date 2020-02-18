"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express'); var _express2 = _interopRequireDefault(_express);
var _cors = require('cors'); var _cors2 = _interopRequireDefault(_cors);
var _mongoose = require('mongoose'); var _mongoose2 = _interopRequireDefault(_mongoose);

var _routes = require('./routes'); var _routes2 = _interopRequireDefault(_routes);

class App {
    

    constructor () {
      this.server = _express2.default.call(void 0, )

      this.middlewares()
      this.databases()
      this.routes()
    }

     middlewares () {
      this.server.use(_cors2.default.call(void 0, ))
      this.server.use(_express2.default.json())
    }

     databases () {
      _mongoose2.default.connect('mongodb://localhost:27017/typescript', {
        useNewUrlParser: true,
        useUnifiedTopology: true
      })
    }

     routes () {
      this.server.use(_routes2.default)
    }
}

exports. default = new App().server
