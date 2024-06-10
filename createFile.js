const fs = require('fs');
const content = 'Hello Abdo';
fs.writeFile('welcome.txt', content, (err) => {
    if (err) {
        console.log.error("An error occurred while writing to the file:", err);
        return;}
        console.log('File "welcome.txt" has been created successfully.');
    });