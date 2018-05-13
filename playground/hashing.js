const {SHA256} = require('crypto-js');
const jwt = require('jsonwebtoken');

let data = {
  id: 23
};

let token = jwt.sign(data, 'lebronJamesSweptTheRaptors');
console.log('Coded Token: ', token);
let decoded = jwt.verify(token, 'lebronJamesSweptTheRaptors');
console.log('Decoded Token: ', decoded);

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
