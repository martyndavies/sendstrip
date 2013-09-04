# SendStrip

Always stripping out the name and email address from the SendGrid Inbound Parse Webhook's 'from' field? Never again.

## Installation

```html
$ npm install sendstrip
```
## Usage

```javascript
var sendstrip = require('sendstrip');
var email = "\"SendGrid Test Yeah\" <send.grid.test@gmail.com>";

sendstrip(email, function(err, name, address, to ,domain){
	console.log(err);
	console.log(name);
	console.log(address);
	console.log(to);
	console.log(domain);
});
```

## License

(The MIT License)

Copyright (c) 2013 Martyn Davies

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the 'Software'), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.