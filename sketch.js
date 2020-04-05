let myFont
let graphic
let graphic2

function preload() {
  myFont = loadFont('./spacegrotesk-medium.otf')
}

function setup() {
  createCanvas(500, 500);

  graphic = createGraphics(500, 500)
  graphic.fill('#ef5236')
  graphic.textAlign(CENTER, CENTER)
  graphic.textFont(myFont)
  graphic.textSize(400)
  graphic.text('01', width / 2, height / 2)

  graphic2 = createGraphics(500, 500)
  graphic2.fill('#ef5236')
  graphic2.textAlign(CENTER, CENTER)
  graphic2.textFont(myFont)
  graphic2.textSize(400)
  graphic2.text('23', width / 2, height / 2)
}

function draw() {
  background('#ecf072')

  let val = sin(frameCount * 0.02) * 250

  copy(graphic, 0, 0, 250 + val, 500, 0, 0, 250 + val, 500)
  copy(graphic2, 250 + val, 0, 250 - val, 500, 250 + val, 0, 250 - val, 500)
}