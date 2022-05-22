const fs = require('fs');

const rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

fs.open('./02-write-file/text.txt', 'a', () => {
    console.log('Введите текст пожалуйста:');
});

rl.on('line', (input) => {
    if (input === 'exit') {
        console.log('Спасибо! Можете проверить файл text.txt!');
        rl.close();
    } else {fs.appendFile('./02-write-file/text.txt', `${input} \n`, (err) => {
        if(err) throw err;
    });
    }
});

rl.on('SIGINT', () => {
    console.log('Спасибо! Можете проверить файл text.txt!');
    rl.close();
});
