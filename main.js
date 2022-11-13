const canvas = document.getElementById('canvas_castle');
const ctx = canvas.getContext('2d');

// 畫布尺寸
canvas.width = 400
canvas.height = 400

/** 網格線 */
function gridLines() {
  let pos = 50; // 網格距離
  const lines = 400 / pos; // 網格數量

  ctx.beginPath()
  for(let i = 0; i < lines; i++) {
    pos = i * 50
    ctx.moveTo(pos, 0)
    ctx.lineTo(pos, 400)
    ctx.fillText(pos, pos, 10)

    ctx.moveTo(0, pos)
    ctx.lineTo(400, pos)
    ctx.fillText(pos, 2, pos)
  }
  ctx.strokeStyle ="rgba(0,0,0,0.1)"
  ctx.stroke()
}

let time = 0
let mouse = { x: 0, y: 0 }

canvas.addEventListener("mousemove", (e) => {
  mouse.x = e.offsetX
  mouse.y = e.offsetY
})

/** 繪製畫布 */
function draw() {
  time++
  ctx.clearRect(0, 0, 400, 400)

  gridLines()

  // 地面
  ctx.beginPath()
  ctx.moveTo(25, 350)
  ctx.lineTo(375, 350)
  ctx.lineWidth = 2
  ctx.strokeStyle = "black"
  ctx.stroke()

  // 深橘
  ctx.fillStyle = "#ed5a2a"
  ctx.fillRect(300, 300, 50, 50)
  ctx.strokeRect(300, 300, 50, 50)

  // 蛋黃
  ctx.beginPath()
    ctx.rect(250, 250, 50, 100)
    ctx.rect(50, 300, 50, 50)
  ctx.fillStyle = "#ffc12c"
  ctx.fill()
  ctx.stroke()

  // 淺橘
  ctx.beginPath()
    ctx.rect(100, 250, 50, 100)
    ctx.rect(200, 250, 50, 100)
  ctx.fillStyle = "#ff9f51"
  ctx.fill()
  ctx.stroke()

  // 拱門
  ctx.beginPath()
    ctx.moveTo(100, 200)
    ctx.lineTo(250, 200)
    ctx.lineTo(250, 250)
    ctx.lineTo(200, 250)
    ctx.arc(175, 250, 25, Math.PI*2, Math.PI, true)
    ctx.lineTo(100, 250)
    ctx.closePath()
  ctx.fillStyle = "white"
  ctx.fill()
  ctx.stroke()

  // 屋頂
  ctx.beginPath()
    ctx.moveTo(100, 200)
    ctx.lineTo(250, 200)
    ctx.lineTo(175, 150)
    ctx.closePath()
  ctx.fillStyle = "#ed5a2a"
  ctx.fill()
  ctx.stroke()

  // Flag
  ctx.beginPath()
    ctx.moveTo(175, 150)
    ctx.lineTo(175, 100 - (mouse.y / 5))
    ctx.lineTo(200, 110 - (time % 5) - (mouse.y / 5))
    ctx.lineTo(175, 120 - (mouse.y / 5))
    ctx.closePath()
  ctx.fillStyle = `hsl(${mouse.x % 360}, 50%, 50%)`
  ctx.fill()
  ctx.stroke()

  // Car
  let carX = (time % 440) - 40
  ctx.fillStyle = "white"
  ctx.fillRect(carX, 325, 40, 25)
  ctx.strokeRect(carX, 325, 40, 25)
  ctx.beginPath()
  ctx.arc(carX+10, 350, 5, 0, Math.PI*2)
  ctx.arc(carX+30, 350, 5, 0, Math.PI*2)
  ctx.fillStyle = "black"
  ctx.fill()
  ctx.stroke()

  // Mouse
  ctx.beginPath()
    ctx.arc(mouse.x, mouse.y, 5, 0, Math.PI*2)
  ctx.strokeStyle = "black"
  ctx.stroke()
}

setInterval(draw, 30)
