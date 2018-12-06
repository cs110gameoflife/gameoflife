var fs = require('fs');
var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);

app.use(express.static("."));
app.get('/', function (req, res) {
    res.redirect('index.html');
});
server.listen(3000);

io.on('connection', function (socket) {
    socket.on("send data", function (data) {
        var grass = data[0][0];
        var herb = data[0][1];
        var pred = data[0][2];
        var super0 = data[0][3];
        var file = "statistics.json";
        var grbyhb = data[1][0];
        var hbbypd = data[1][1];
        var grbysp = data[1][2];
        var hbbysp = data[1][3];
        var pdbysp = data[1][4];
        var hbdie = data[2][0];
        var pddie = data[2][1];
        var spdie = data[2][2];
        var st = {
            "The current number of grasses" : grass,
            "The current number of herbivores" : herb,
            "The current number of predators" : pred,
            "The current number of super animals" : super0,
            "The number of grasses eaten by herbivores" : grbyhb,
            "The number of herbivores eaten by predators" : hbbypd,
            "The number of grasses eaten by super animals" : grbysp,
            "The number of herbivores eaten by super animals" : hbbysp,
            "The number of predators eaten by super animals" : pdbysp,
            "Years passed" : data[1][5],
            "The percentage of herbivores dead as a result of hunger" : Math.round(100*hbdie/(hbdie + hbbypd + hbbysp)),
            "The percentage of predators dead as a result of hunger" : Math.round(100*pddie/(pddie + pdbysp)),
            "The number of dead super animals" : spdie
        };
        var b = JSON.stringify(st, null, 2);
        fs.writeFileSync(file, b);
        /*var file = "test.json";
        var a = JSON.parse(fs.readFileSync(file).toString());
        a.age = 30;
        var b = JSON.stringify(a);
        fs.writeFileSync(file, b);
        var nj = JSON.parse(fs.readFileSync(file).toString());
        nj.name = "John";
        nj.prof = "Teacher";
        var c = JSON.stringify(nj, null, 2);
        fs.writeFileSync(file, c);
        */
        //console.log(data);
        //io.sockets.emit("display message", data);
    })
});

