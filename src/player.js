export default class Player {
  constructor(gameHeight, gameWidth) {
    // game area size
    this.gameHeight = gameHeight;
    this.gameWidth = gameWidth;
    // object size
    this.height = 30;
    this.width = 30;
    // object starting position
    this.position = {
      x: 0,
      y: this.gameHeight - this.height,
    };
    // object starting velocity
    this.vel = {
      x: 0,
      y: 0
    }
    // movement increments
    this.movement = {
      x: 30,
      y: 30,
    };
    // movement variables
    this.moveSpeed = 3;
    this.friction = 1 - (this.moveSpeed / this.movement.x); // this is only applicable in horizontal
  }

  draw(ctx) {
    ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
  }

  update(deltaTime) {
    if (!deltaTime) return;

    this.position.x +=  this.vel.x;
    this.vel.x *= this.friction;
  }

  moveRight() {
    this.vel.x = this.moveSpeed;
  }

  moveLeft() {
    this.vel.x = -this.moveSpeed;
  }

  start(mockData) {
    let i = 0;
    let interval = setInterval(() => {
      this._selectFunction(mockData[i]);
      i++;
      if (i === mockData.length) clearInterval(interval);
    }, 1000);
  }

  _selectFunction(input) {
    switch (input) {
      case "player.moveRight()":
        this.moveRight();
        break;
      case "player.moveLeft()":
        this.moveLeft();
        break;
    }
  }
}
