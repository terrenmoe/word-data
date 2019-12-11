fs.readFile(`${process.cwd()}/src/freqA.json`, (err, data) => console.log(JSON.parse(data.toString())))
