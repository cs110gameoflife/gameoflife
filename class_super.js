class Super extends Livcreature {

    constructor(x, y, index,energy) {
        super(x, y, index, energy);
        this.pts = 0;


    }

    wte()
    {
        
    }

    eat1() {
        if (this.freespace(3)[0]) {
            var dir = random(this.freespace(3));
            var src = predArr;
            var pts = 3;
            pdbysp += 1;
        }
        else if (this.freespace(2)[0]) {
            var dir = random(this.freespace(2));
            var src = herbArr;
            var pts = 2;
            hbbysp += 1;
        }
        else if (this.freespace(1)[0]) {
            var dir = random(this.freespace(1));
            var src = grassArr;
            var pts = 1;
            grbysp += 1;
        }


        if (dir) {
            matrix[this.y][this.x] = 0;
            this.x = dir[0];
            this.y = dir[1];
            matrix[this.y][this.x] = 4;
            for (var a in src) {
                if (src[a].x == dir[0] && src[a].y == dir[1]) {
                    src.splice(a, 1);
                }
            }

            this.ttl += pts;
            this.energy = 15;
        }
    }
}

/*
    eat() {
        var dir = random(this.freespace(this.index - 1));
        if (dir) {
            matrix[this.y][this.x] = 0;
            this.x = dir[0];
            this.y = dir[1];
            matrix[this.y][this.x] = this.index;
            for (var a in gga[this.index - 1]) {
                if (gga[this.index - 1][a].x == dir[0] && gga[this.index - 1][a].y == dir[1]) {
                    gga[this.index - 1].splice(a, 1);
                }
            }

            this.ttl += 1;
            this.energy = this.index * 2;
        }
    }*/