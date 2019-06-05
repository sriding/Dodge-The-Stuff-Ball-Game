import CreateShapes from "./../CreateShapes.js";

class Circle extends CreateShapes {
  constructor(
    xcord,
    ycord,
    widthOrRadius,
    height,
    startAngle,
    endAngle,
    speed,
    bgColor,
    strokeColor,
    canvasContext
  ) {
    super(
      xcord,
      ycord,
      widthOrRadius,
      height,
      startAngle,
      endAngle,
      speed,
      bgColor,
      strokeColor,
      canvasContext
    );

    this.animation = 0;
    this.drawCircle();
  }

  drawCircle() {
    this.drawShape();
    this.canvasContext.beginPath();
    let newPath = new Path2D();
    newPath.arc(this.xcord, this.ycord, this.widthOrRadius, 0, 2 * Math.PI);
    for (let i = 0; i < 360; i += 10) {
      this.location.push({
        x: Math.floor(this.widthOrRadius * Math.cos(i) + this.xcord),
        y: Math.floor(this.widthOrRadius * Math.sin(i) + this.ycord)
      });
    }
    this.canvasContext.stroke(newPath);
  };

  get getCurrentAnimation() {
    return this.animation;
  }

  set setCurrentAnimation(animation) {
    return (this.animation = animation);
  }

  moveCircle() {
    this.xcord -= this.speed;

    if (this.getCurrentAnimation < 5) {
      this.ycord -= this.speed;
      this.animation = this.getCurrentAnimation + 0.2;
    }

    if (this.getCurrentAnimation >= 5 && this.getCurrentAnimation < 10) {
      this.ycord += this.speed;
      this.animation = this.getCurrentAnimation + 0.2;
    }

    if (this.getCurrentAnimation >= 10) {
      this.animation = 0;
    }
  };
}

export default Circle;
