class Livcreature {
    constructor(x, y, index, energy, gender) {
        this.x = x;
        this.y = y;
        this.index = index;
        this.multiply = 0;
        this.energy = energy;
        this.ttl = 0;
        this.src = this.index - 1;
        this.gender = gender

        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];


    }

    getnewcoordinates() {
        this.directions = [];
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ]
    }

    freespace(ch) {
        this.getnewcoordinates();
        var found = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {

                if (matrix[y][x] == ch) {
                    found.push(this.directions[i]);
                }
            }
        }
        return found;
    }

    move() {
        var dir = random(this.freespace(0));
        if (dir) {
            matrix[this.y][this.x] = 0;
            this.x = dir[0];
            this.y = dir[1];
            matrix[this.y][this.x] = this.index;
            this.ttl = 0;
            this.energy -= 1;
        }
        //return dir;
    }

    eat() {
        var dir = random(this.freespace(this.src));
        if (dir) {
            matrix[this.y][this.x] = 0;
            this.x = dir[0];
            this.y = dir[1];
            matrix[this.y][this.x] = this.index;
            for (var a in gga[this.src]) {
                if (gga[this.src][a].x == dir[0] && gga[this.src][a].y == dir[1]) {
                    gga[this.src].splice(a, 1);
                }
            }

            this.ttl += 1;
            this.energy = this.index * 2;
        }
    }

    mult() {
        var multArr = this.freespace(this.index);
        //console.log(multHerb);
        if (multArr.length > 0) {
            for (var a = 0; a < multArr.length; a++) {
                for (var b in gga[this.index]) {
                    if (multArr[a][0] == gga[this.index][b].x && multArr[a][1] == gga[this.index][b].y && this.gender != gga[this.index][b].gender) {
                        //setTimeout(herbArr[i].mult(), 1000);
                        this.ttl = 0;
                        gga[this.index].push(new ggt[this.index](this.x, this.y, 2, this.src * 10, random(rnd)));
                        matrix[this.y][this.x] = this.index;
                        //console.log(ggt[this.index]);
                        break;
                    }
                    break;
                }
            }
        }
    }


        die() {
            for (var a in gga[this.index]) {
                if (gga[this.index][a].x == this.x && gga[this.index][a].y == this.y) {
                    matrix[this.y][this.x] = 0;
                    gga[this.index].splice(a, 1);

                }
            }
        }
    }











