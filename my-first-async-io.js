const fs = require('fs');

const filePath = process.argv[2];
fs.readFile(filePath, function(err, contents){
    if(err) {
        return console.error('Error reading file', err);
    }

    const lineCount = contents.toString().split('\n').length - 1;
    console.log(lineCount);
});