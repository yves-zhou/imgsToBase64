var fs = require('fs');

//删除dist文件夹里的文件
fs.readdir('./dist/', function(err, files){
    if(err) return console.error(err);
    files.forEach(function(file){
        fs.unlink('./dist/'+file);
    })
})

fs.readdir('./imgs/', function(err, files){
    if(err) return console.error(err);
    files.forEach(function(file){
        var fileCon = file.split('.');
        var date = fs.readFileSync('./imgs/'+file);
        var base64Img = 'data:image/'+fileCon[1]+';base64,' + date.toString('base64');
        fs.writeFile('./dist/'+fileCon[0]+'.txt', base64Img)
    });
});