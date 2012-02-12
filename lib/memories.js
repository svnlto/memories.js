/*!
 * memories: A simple in-memory caching module for Node.js
 *
 * Copyright(c) 2011 Sven Lito. <me@svenlito.com>
 * MIT LICENCE
 *
 */

var util = require('util');

var cache = {},
    now = function() { return (new Date()).getTime(); };

var memories = {

  put: function(key, value, validFor) {
    var args = Array.prototype.slice.call(arguments),
        expire = validFor + now();

    if (!args || args.length === 0) {
      return 'missing arguments';
    } else {
      cache[key] = {
        value: value,
        expire: expire
      };

      if (!isNaN(expire)) {
        setTimeout(function() { this.del(key); }, expire);
      }
    }
  },

  get: function(key) {
    var data = cache[key];

    if (typeof(data) !== "undefined") {
      if (isNaN(data.expire) || data.expire >= now()) {
        return data.value;
      }
    } else {
      return null;
    }
  },

  del: function(key) {
    delete cache[key];
  },

  size: function() {
    var size = 0, key;

    for (key in cache) {
      if (cache.hasOwnProperty(key)) {
        if (memories.get(key) !== null) {
          size++;
        }
      }
    }
    return size;
  }
};

module.exports = memories;
