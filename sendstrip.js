var _ = require('underscore');
var completeString, err, address, amountOfSplits, emailAddress, senderName, splitEmail, to, domain;

module.exports = function(rawEmail, cb) {
  "use strict";

  if (rawEmail) {
    completeString  = rawEmail.replace(/</g, '').replace(/>/g, '').split(' ');
    senderName      = _.initial(completeString, 1).toString().replace(/,/g, ' ').replace(/"/g, '');
    emailAddress    = _.last(completeString, 1).toString();
    splitEmail      = emailAddress.split('@');
    to              = splitEmail[0];
    domain          = splitEmail[1];
    
    cb(err=null, senderName, emailAddress, to, domain);
  } else {
    cb(new Error('The module errored'), null, null, null, null);
  }
};