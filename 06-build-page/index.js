const fs = require('fs');
const path = require('path');


// Создание папки
fs.mkdir(path.join(__dirname, 'project-dist'), err => {
    if (err) throw err;
});

// Styles
function createStyles() {
    fs.readdir(path.join(__dirname, './styles'), (err, files) => {
        files.forEach(file => {
            if (path.extname(file).slice(1) == 'css') {
                fs.readFile(path.join(__dirname, `./styles/${file}`), 'utf8', (err) => {
                    if(err) throw err;
                    fs.appendFile(path.join(__dirname, './project-dist/style.css'), `@import url('../styles/${file}');\n`, (err) => {
                        if(err) throw err;
                    });
                });
            }
        });
    });
    
    fs.open(path.join(__dirname, './project-dist/style.css'), 'a', (err) => {
        if(err) throw err;
    });    
}

function del() {
    fs.writeFile(path.join(__dirname, './project-dist/bundle.css'), ' ', (err) => {
        if(err) throw err;
    });
}


fs.access(path.join(__dirname, './project-dist/style.css'), function(error){
    if (error) {
        createStyles();
    } else {
        del();
        createStyles();
    }
});

// Copy assets
function copyAssets() {
    fs.mkdir(path.join(__dirname, './project-dist/assets'), err => {
        if(err) throw err;
    });
    fs.mkdir(path.join(__dirname, './project-dist/assets/fonts'), err => {
        if(err) throw err;
    });
    fs.mkdir(path.join(__dirname, './project-dist/assets/img'), err => {
        if(err) throw err;
    });
    fs.mkdir(path.join(__dirname, './project-dist/assets/svg'), err => {
        if(err) throw err;
    });

    fs.readdir(path.join(__dirname, './assets/fonts'), (err, files) => {
        files.forEach(file => {
            fs.copyFile(path.join(__dirname, `./assets/fonts/${file}`), path.join(__dirname, `./project-dist/assets/fonts/${file}`), err => {
                if(err) throw err;
            });
        })
    }),
    fs.readdir(path.join(__dirname, './assets/img'), (err, files) => {
        files.forEach(file => {
            fs.copyFile(path.join(__dirname, `./assets/img/${file}`), path.join(__dirname, `./project-dist/assets/img/${file}`), err => {
                if(err) throw err;
            });
        })
    }),
    fs.readdir(path.join(__dirname, './assets/svg'), (err, files) => {
        files.forEach(file => {
            fs.copyFile(path.join(__dirname, `./assets/svg/${file}`), path.join(__dirname, `./project-dist/assets/svg/${file}`), err => {
                if(err) throw err;
            });
        })
    }) 
}

fs.access(path.join(__dirname, './project-dist'), function(error){
    if (error) {
        console.log('Удалите папку project-dist, иначе будет ошибка!');
    } else {
        copyAssets();
    }
});

//HTML
function copyHtml() {
    fs.open(path.join(__dirname, './project-dist/style.css'), 'a', (err) => {
        if(err) throw err;
    }); 
    fs.copyFile(path.join(__dirname, 'template.html'), path.join(__dirname, './project-dist/index.html'), err => {
        if(err) throw err;
    });

    
    const express = require('express');
    const app = express();
    const handlebars = require('express-handlebars');
    app.engine(
        'handlebars',
        handlebars({ defaultLayout: 'header' })
    )
    app.set('views', './components')
    app.set('view engine', 'handlebars')
}

fs.access(path.join(__dirname, './project-dist/index.html'), function(error){
    if (error) {
        copyHtml();
    } else {
        console.log('Удалите папку project-dist, иначе будет ошибка!');
    }
});



function file() {
    // fs.readFile('/components/header.html', 'utf8', (err, fileContent) => {
  
    //     if (!err) {
    //        fs.readFile('components/header.html', 'utf8', (errorHeader, fileContentHeader) => {
    //           if(errorHeader) throw errorHeader;
  
    //           fileContent = fileContent.replace(/\{\{header\}\}/, fileContentHeader);
    //           response.write(fileContent);
    //        })
    //     }
    //  });
}

fs.access(path.join(__dirname, './project-dist/index.html'), function(error){
    if (error) {
        file();
    } else {
        console.log('hi');
    }
});
