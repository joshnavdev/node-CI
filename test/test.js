var request = require('supertest');
var app = require('../index');

describe('GET /', function() {
    it('respond with Hello World', function(done) {
        request(app).get('/').expect('Test Unsuccesfull', done);
    });
});