const fs = require('fs');
const path = require('path');


function del() {
    fs.readdir(path.join(__dirname, './files-copy'), (err, files) => {
        files.forEach(file => {
            fs.unlink(path.join(__dirname, `./files-copy/${file}`), err => {
                if(err) throw err;
                console.log(file + ' успешно удален');
            });
        })
    }
    )
};

function add() {
    fs.mkdir(path.join(__dirname, './files-copy'), err => {
        if(err) throw err;
    });
}

fs.access(path.join(__dirname, './files-copy'), function(error){
    if (error) {
        add();
        copy();
    } else {
        del();
        copy();
    }
});



function copy() {
    fs.readdir(path.join(__dirname, './files'), (err, files) => {
        files.forEach(file => {
            fs.copyFile(path.join(__dirname, `./files/${file}`), path.join(__dirname, `./files-copy/${file}`), err => {
                if(err) throw err;
                console.log(file + ' успешно скопирован');
            });
        })
    })    
}
