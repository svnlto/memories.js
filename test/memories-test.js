var assert = require('assert'),
    vows = require('vows'),
    cache = require('../lib/memories');

vows.describe('memories').addBatch({

  'creating a new cache instance': {

    topic: cache,

    'should be an object': function(topic) {
      assert.isObject(cache);
    },

    'should provide a `get()`, `put()`, `del()` and `size()` method': function(topic) {
      assert.isFunction(topic.get);
      assert.isFunction(topic.put);
      assert.isFunction(topic.del);
      assert.isFunction(topic.size);
    },

    'put() can only be invoked with params': function(topic) {
      assert.equal(topic.put(), 'missing arguments');
    }
  }
}).addBatch({

  'setting a simple cache item': {

    topic: cache.put('cat', 'schroedingers'),

    'cache should have a length of 1': function(topic) {
      assert.equal(cache.size(), 1);
    },

    'should return cached data': function(topic) {
      assert.equal(cache.get('cat'), 'schroedingers');
    },

    'and should be deleting 1': function(topic) {
      assert.equal(cache.del('cat'), null);
    }
  }
}).addBatch({

  'setting a complex cache item with no value': {

    topic: function() {
      cache.put('complex');
      return cache
    },

    'should have a length of 1': function(topic) {
      assert.equal(cache.size(), 1);
    },

    'should have no value defined': function(topic) {
      assert.equal(cache.get('complex'), undefined);
    },
    'should delete item': function(topic) {
      assert.equal(cache.del('complex'), null);
    }

  }
}).addBatch({

  'setting a complex cache item with data': {

    topic: function() {
      cache.data = { 'post': {
        'title': 'example post',
        'description': 'some example description',
        'tags': ['tagA', 'tagB', 'tagC', 'tagD']
      }};
      cache.put('complex', cache.data)
      return cache
    },

    'should return cached data': function(topic) {
      assert.equal(cache.get('complex'), topic.data);
    },

    'should have a length of 1': function(topic) {
      assert.equal(cache.size(), 1);
    }

  }
}).export(module);
