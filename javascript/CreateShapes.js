class CreateShapes {
  //12 Parameters so far
  constructor(
    xcord = 0,
    ycord = 0,
    widthOrRadius = 40,
    height = 40,
    startAngle = 0,
    endAngle = 0,
    speed = 5,
    time = 0,
    hit = 0,
    bgColor = "white",
    strokeColor = "black",
    canvasContext
  ) {
    (this.xcord = xcord),
      (this.ycord = ycord),
      (this.widthOrRadius = widthOrRadius);
    this.height = height;
    this.startAngle = startAngle;
    this.endAngle = endAngle;
    this.speed = speed;
    this.time = time;
    this.hit = hit;
    this.bgColor = bgColor;
    this.strokeColor = strokeColor;
    this.canvasContext = canvasContext;
    this.location = [];
  }

  get getCurrentXcord() {
    return this.xcord;
  }

  get getCurrentYcord() {
    return this.ycord;
  }

  get getCurrentWidthOrRadius() {
    return this.widthOrRadius;
  }

  get getCurrentHeight() {
    return this.height;
  }

  get getCurrentStartAngle() {
    return this.startAngle;
  }

  get getCurrentEndAngle() {
    return this.endAngle;
  }

  get getCurrentSpeed() {
    return this.speed;
  }

  get getCurrentTime() {
    return this.time;
  }

  get getCurrentHit() {
    return this.hit;
  }
  get getCurrentBgColor() {
    return this.bgColor;
  }

  get getCurrentStrokeColor() {
    return this.strokeColor;
  }

  get getCurrentCanvasContext() {
    return this.canvasContext;
  }

  get getCurrentLocation() {
    return this.location;
  }
  set setCurrentXcord(xcord) {
    return (this.xcord = xcord);
  }

  set setCurrentYcord(ycord) {
    return (this.ycord = ycord);
  }
  set setCurrentWidthOrRadius(widthOrRadius) {
    return (this.widthOrRadius = widthOrRadius);
  }

  set setCurrentHeight(height) {
    return (this.height = height);
  }

  set setCurrentStartAngle(startAngle) {
    return (this.startAngle = startAngle);
  }

  set setCurrentEndAngle(endAngle) {
    return (this.endAngle = endAngle);
  }

  set setCurrentSpeed(speed) {
    return (this.speed = speed);
  }

  set setCurrentTime(time) {
    return (this.time = time);
  }

  set setCurrentHit(hit) {
    return (this.hit = hit);
  }

  set setCurrentBgColor(bgColor) {
    return (this.bgColor = bgColor);
  }

  set setCurrentStrokeColor(strokeColor) {
    return (this.strokeColor = strokeColor);
  }

  set setCurrentCanvasContext(canvasContext) {
    return (this.canvasContext = canvasContext);
  }

  /*set setCurrentLocation(location) {
    return (this.location = Array.from(location));
  }*/

  drawShape = () => {
    this.canvasContext.fillStyle = this.bgColor;
    this.canvasContext.strokeStyle = this.strokeColor;
  };
}

export default CreateShapes;