var express = require('express');
var app = express();
//var port = Number(proccess.end.PORT||3000);

app.set('port', (process.env.PORT || 3000));

app.use(express.static(__dirname));

app.listen(app.get('port'), function(){
    console.log('Node app is running on port', app.get('port'));
});