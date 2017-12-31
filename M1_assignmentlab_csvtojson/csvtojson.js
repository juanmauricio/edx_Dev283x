const fs = require('fs')
const path = require('path')
const csv = require('csvtojson')

const convertCSVToJSON = (filename = '') => {
    console.log('started...');
    const file = path.join(__dirname, 'data', filename);
    console.log(file);
    csv().fromFile(file, function (err, result) {

        if (err) {
            console.log("An Error Has Occured");
            console.log(err);
        }

        fs.appendFile('JSONdata.json', JSON.stringify(result), function (err) {
            if (err) throw err;
        });

    })
}

convertCSVToJSON(process.argv[2]);