const fs = require('fs');
const path = require('path');

fs.readdir(path.join(__dirname, './styles'), (err, files) => {
    files.forEach(file => {
        if (path.extname(file).slice(1) == 'css') {
            fs.readFile(path.join(__dirname, `./styles/${file}`), 'utf8', (err) => {
                if(err) throw err;
                fs.appendFile(path.join(__dirname, './project-dist/bundle.css'), `@import url('../styles/${file}');\n`, (err) => {
                    if(err) throw err;
                });
            });
        }
    });
});

fs.open(path.join(__dirname, './project-dist/bundle.css'), 'a', (err) => {
    if(err) throw err;
});
