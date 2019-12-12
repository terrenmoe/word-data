'use strict';

const fs = require('fs')
const path = require('path');

let freqWordsByLetter = {};

fs.promises.readFile(
  path.resolve('./src/json/freqWordsByLetter.json')
).then(
  (data) => JSON.parse(data.toString())
).then(
  (data) => Object.assign(
    freqWordsByLetter,
    {
      findFreqOfWords: (...words) => (
        words.map(
          word => data[`freq${word[0].toUpperCase()}`].findIndex(
            (cur) => cur === word
          ) + 1
        )
      ),
      findWordsOfFreq: (freq) => (
        Object.values(data).map(cur => cur[freq - 1])
      )

    },
    data
  )
).catch(console.log)

module.exports = freqWordsByLetter;
