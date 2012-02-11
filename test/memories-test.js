var assert = require('assert'),
    vows = require('vows'),
    cache = require('../lib/memories');

var data = {
  'glossary': {
    'title': 'example glossary',
    'description': 'some example description',
    'tags': ['tagA', 'tagB', 'tagC', 'tagD']
  }
};

vows.describe('memories').addBatch({

  'creating a new cache instance': {

    topic: cache,

    'should provide a `get()`, `put()`, `del()` and `size()` method': function (topic) {
      assert.isFunction(topic.get);
      assert.isFunction(topic.put);
      assert.isFunction(topic.del);
      assert.isFunction(topic.size);
    }
  }
}).addBatch({

  'setting a simple cache item': {

    topic: cache.put('mem', 'ory'),

    'cache should have a length of 1': function(topic) {
      assert.equal(cache.size(), 1)
    },

    'should return cached data': function(topic) {
      assert.equal(cache.get('mem'), 'ory')
    },

    'and should be deleting 1': function(topic) {
      assert.equal(cache.del('mem'), null)
    }
  }
}).export(module);
