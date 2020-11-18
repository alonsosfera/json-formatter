'use strict'

const fs = require('fs');

fs.readFile('checklist.json', (err, data) => {
  if (err) throw err;

  const checklists = JSON.parse(data);
  const result = {}

  Object.keys(checklists).map(key => {
    const value = checklists[key] === "si" ? true : checklists[key] === "no" ? false : checklists[key]
    result[key] = { value }
  })

  fs.writeFileSync('result.json', JSON.stringify(result));
});
