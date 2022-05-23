fs.readdir(path.join(__dirname, './secret-folder'), (err, files) => {
   files.forEach(file => {
      fs.stat(path.join(__dirname, './secret-folder'), function(err, stats) {
         console.log(path.basename(file, path.extname(file)) + ' - ' + path.extname(file).slice(1) + ' - ' + stats.size + ' байт');
      });
   })
})
