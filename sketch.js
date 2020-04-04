let myFont
let graphic

function preload() {
  myFont = loadFont('./spacegrotesk-medium.otf')
}

function setup() {
  createCanvas(600, 400);

  graphic = createGraphics(600, 400)
  graphic.fill('#ef5236')
  graphic.textAlign(CENTER, CENTER)
  graphic.textFont(myFont)
  graphic.textSize(300)
  graphic.text('Olly', width / 2, height / 2)
}

function draw() {
  background('#ecf072')

  let val = sin(frameCount * 0.02) * 300

  copy(graphic, 0, 0, 600, 600, 0, 0, 300 + val, 600)
  copy(graphic, 0, 0, 600, 600, 300 + val, 0, 300 - val, 600)
}