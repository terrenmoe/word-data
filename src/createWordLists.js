#!/usr/bin/node
'use strict';
const path = require('path');
const fs = require('fs');

let freqWordLists = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('').reduce(
  (acc, cur) => (
    Object.assign(
      acc,
      {
        [`freq${cur}`]: JSON.parse(
          fs.readFileSync(
            path.resolve(`./src/json/freq${cur}.json`),
          ).toString()
        )
      }
    )
  ),
  {}
)

module.exports = freqWordLists;

process.stdout.write(JSON.stringify(freqWordLists))
