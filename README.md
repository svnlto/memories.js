# memories.js 

[![Build Status](https://secure.travis-ci.org/svnlto/memories.js.png)](http://travis-ci.org/svnlto/memories.js)

A simple in-memory cache module for node.js

## Installation

### Installing npm (node package manager)
```bash
  curl http://npmjs.org/install.sh | sh
```

### Installing memories
```js
  [sudo] npm install memories.js
```

## Usage
```js
  var cache = require('./lib/memories');
  
  // add new item to the cache

  cache.put('cat', 'schroedingers');
  cache.get('cat'); // schroedinger

  // check cache length
  
  cache.size(); // 1
  
  // delete item from cache
  
  cache.del('cat'); // gone
 
```
## API

##### set()
```jsdoc
  cache.set: function(key, value, time)
    @param key {String} an Id.
    @param value {String} || {Object} a String or JSON object.
    @param time {integer} [optional] time after the Item will be removed from cache.
```

##### get()
```jsdoc
  cache.get: function(key)
    @param key {String} an Id.
```

##### del()
```jsdoc
  cache.del: function(key)
    @param key {String} an Id.
```

##### size()
```jsdoc
  cache.size: function()
```


## Run Tests
Tests are written in vows.

```bash
  $ npm test
```

#### Author: [Sven Lito](http://svenlito.com)
#### License: MIT 
