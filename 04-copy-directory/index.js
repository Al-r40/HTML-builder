const fs = require('fs');
const path = require('path');


function del() {
    fs.readdir(path.join(__dirname, './files'), (err, files) => {
        files.forEach(file => {
            fs.unlink(path.join(__filename, `./files-copy/${file}`), err => {
                if(err) throw err;
                console.log(file + ' успешно удален');
            });

            
        })
    }

    // fs.rmdir('files-copy', err => {
    //     if(err) throw err;
    )};
    // [
    //     [
    //         {
    //             "name": "Rose",
    //             "letter": "4"
    //         },
    //         {
    //             "name": "Liliya",
    //             "letter": "6"
    //         }
    //     ]
    // ]

function add() {
    fs.mkdir('files-copy', err => {
        if(err) throw err;
    });
}

function addTwo() {
    fs.open('files-copy', err => {
        if(err) throw err;
    });
}
// addTwo();

fs.access('files-copy', function(error){
    if (error) {
        add();
    } else {
        // addTwo();
        del();
    }
});



fs.readdir(path.join(__dirname, './files'), (err, files) => {
    files.forEach(file => {
        fs.copyFile(path.join(__dirname, `./files/${file}`), path.join(__dirname, `./files-copy/${file}`), err => {
            if(err) throw err;
            console.log(file + ' успешно скопирован');
        });
    })
})
