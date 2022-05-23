const fs = require('fs');
const path = require('path');

const rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

fs.open(path.join(__dirname, 'text.txt'), 'a', () => {
    console.log('Введите текст пожалуйста:');
});

rl.on('line', (input) => {
    if (input === 'exit') {
        console.log('Спасибо! Можете проверить файл text.txt!');
        rl.close();
    } else {
        fs.appendFile(path.join(__dirname, 'text.txt'), `${input} \n`, (err) => {
            if(err) throw err;
        });
    }
});

rl.on('SIGINT', () => {
    console.log('\nСпасибо! Можете проверить файл text.txt!');
    rl.close();
});
