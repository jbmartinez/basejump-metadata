/* eslint-env node, mocha */

'use strict';

var should = require('should');
var app = require('../server/app');
var request = require('supertest');

describe('POST /api/fileupload', function() {

  it('should respond with JSON object', function(done) {
    request(app)
      .post('/api/fileupload')
      .attach('attachment', 'test/fixtures/file.jpg')
      .expect(200)
      .expect('Content-Type', /json/)
      .end((err, res) => {
        if (err) {
          return done(err);
        }
        res.body.should.be.instanceof(Object);
        res.body.fileSize.should.equal(8730);
        res.body.fileSize.should.be.a.Number;
        done();
      });
  });
});

describe('GET /', function() {

  it('should respond with an HTML page', function(done) {
    request(app)
      .get('/')
      .expect(200)
      .expect('Content-Type', /html/)
      .end((err, res) => {
        if (err) {
          return done(err);
        }
        res.body.should.match(/API Basejump/);
        done();
      });
  });
});
