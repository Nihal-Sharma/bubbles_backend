var jwt = require('jsonwebtoken');

function generateToken(data){
 const token = jwt.sign(data  , "testkey")
 return token
}

module.exports = {generateToken}