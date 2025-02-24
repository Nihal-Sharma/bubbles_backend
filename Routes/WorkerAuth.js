const express = require('express');
const {workerLogin , workerRegister} = require('../Controllers/workerAuth');

const workerAuthRouter = express.Router();

workerAuthRouter.route("/login")
.post(workerLogin)

workerAuthRouter.route("/register")
.post(workerRegister)

module.exports = workerAuthRouter;