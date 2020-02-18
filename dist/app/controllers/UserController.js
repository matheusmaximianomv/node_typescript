"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _User = require('./../models/User'); var _User2 = _interopRequireDefault(_User);

class UserController {
   async index (request, response) {
    const users = await _User2.default.find()

    return response.status(200).json(users)
  }

   async store (request, response) {
    const user = await _User2.default.create(request.body)

    console.log(user.email)
    console.log(user.fullName())

    return response.status(201).json(user)
  }
}

exports. default = new UserController()
