'use strict';

const fs = require('fs');
const path = require('path');
const proxyquire = require('proxyquire');
const { expect } = require('chai');
const sinon = require('sinon');

const webpageCountMock = require('../mock/webpage_count.json');
const webpageCountSortedMock = require('../mock/webpage_count_asc.json');
const webpageMockHTML = fs.readFileSync(path.resolve(__dirname, '../mock/webpage.html'), 'utf8');
const webpageMockTXT = fs.readFileSync(path.resolve(__dirname, '../mock/webpage.txt'), 'utf8');

const lambda = '../../lambda.js';

describe('Unit Test - Lambda handler', function () {
  it('should successfully return word count array', async done => {
    const event = {
      queryStringParameters: { sort: 'count,asc' },
      body: JSON.stringify({ url: 'bob.com' })
    };

    const requestPromiseMock = async () => requested();

    const htmlToTextMock = {
      fromString: () => convertedtoTXT()
    };

    const countMock = () => counted();
    const sortMock = () => sorted();

    const requested = sinon.stub().resolves(webpageMockHTML);
    const convertedtoTXT = sinon.stub().returns(webpageMockTXT);
    const counted = sinon.stub().returns(webpageCountMock);
    const sorted = sinon.stub().returns(webpageCountSortedMock);

    const Lambda = proxyquire(lambda, {
      'request-promise': requestPromiseMock,
      'html-to-text': htmlToTextMock,
      './helpers/hashmap': countMock,
      './helpers/sort': sortMock
    });

    let { statusCode, body } = await Lambda.handler(event);
    expect(statusCode).to.equal(200);
    expect(body).to.be.a('string');

    body = JSON.parse(body);

    expect(body).to.be.an('array');
    expect(body[0].word).to.be.a('string');
    expect(body[0].count).to.be.a('number');
    expect(body[0].count).to.be.lessThan(body[body.length - 1].count);
    done();
  });
});
