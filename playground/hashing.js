const {SHA256} = require('crypto-js');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

let password = '123abc!';

//bcrypt.genSalt(10, (err, salt) => {
//  bcrypt.hash(password, salt, (err, hash) => {
//    console.log(hash);
//  });
//});

let hashedPassword = '$2a$10$h.SoEgyaf60qfh8ysjNABeAmk0eUz4yVWA/v0f2OoQTFsJF7ph7k2';
bcrypt.compare(password, hashedPassword, (err, res) => {
  console.log(res);
});

/*
let data = {
  id: 23
};

let token = jwt.sign(data, 'lebronJamesSweptTheRaptors');
console.log('Coded Token: ', token);
let decoded = jwt.verify(token, 'lebronJamesSweptTheRaptors');
console.log('Decoded Token: ', decoded);
*/
/*
let message = 'I am user number 3';
let hash = SHA256(message).toString();

console.log(`Message: ${message}`);
console.log(`Hash: ${hash}`);

let data = {
  id: 4
};

let token = {
  data,
  hash: SHA256(JSON.stringify(data) + 'somesecret').toString()
};

//token.data.id = 5;
//token.hash = SHA256(JSON.stringify(token.data)).toString();

let resultHash = SHA256(JSON.stringify(token.data) + 'somesecret').toString();
if(resultHash == token.hash){
   console.log('data was not changed');
}
else{
   console.log('data was changed, do not trust!!!');
}
*/
