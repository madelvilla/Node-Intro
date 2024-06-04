const fs = require('fs');

fs.readFile('planets.txt', (err, data) => {
    if (err) {
        console.error('Error reading the file:', err);
        return;
    }

    const planetData = data.toString();
    const planets = planetData.split('\n');

    planets.forEach(planet => {
        console.log(planet);
    });

});