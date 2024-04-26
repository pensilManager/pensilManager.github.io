function Tetrimino(type, rotation, x, y) {
    this.type = type;
    this.rotation = rotation;
    this.x = x;
    this.y = y;

    this.move = function (dx, dy) {
        this.x += dx;
        this.y += dy;
    };

    this.rotate = function (dr) {
        this.rotation = (this.rotation + dr) % 4;
    };
}