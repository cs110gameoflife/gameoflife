class Generator{
    constructor(x, y, ind){
        this.x = x;
        this.y = y;
        this.index = ind;
        this.directions = [];
        this.multiply = 0;
        this.type = ggt[this.index];
        this.sga = gga[this.index];
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
        ];
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

    /*mult() {
        this.multiply++;
        var newcord = random(this.freespace(0));
        if (this.multiply >= 5  && newcord) {
            this.sga.push(new this.type(newcord[0], newcord[1]));
            matrix[newcord[1]][newcord[0]] = this.index;
            this.multiply = 0;
        }
    }
    */

    mult() {
        this.multiply++;
        var newcord = random(this.freespace(0));
        var elsec = random(this.freespace(1));
        if (this.multiply >= 5  && newcord) {
            this.sga.push(new this.type(newcord[0], newcord[1], this.index, (this.index-1)*10, random(rnd)));
            matrix[newcord[1]][newcord[0]] = this.index;
            this.multiply = 0;
        }
        else if(this.multiply >= 5  && elsec &&  (this.index == 2 || this.index == 4)) {
            this.sga.push(new this.type(elsec[0], elsec[1], this.index, (this.index-1)*5));
            matrix[elsec[1]][elsec[0]] = this.index;
            this.multiply = 0;
        }
    }

   /* mult() {
        this.multiply++;
        for(var i in this.freespace(0)){
            if (this.multiply >= 5  && i) {
                this.sga.push(new this.type(i[0], i[1]));
                matrix[i[1]][i[0]] = this.index;
                this.multiply = 0;
            }
        }
    }*/
}
