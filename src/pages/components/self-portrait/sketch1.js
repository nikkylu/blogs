// reference: p4.js reference page 
// obj file: https://free3d.com/3d-model/straight-leg-chair-honey-v1--763124.html
let octahedron;
function setup() {
  createCanvas(400, 400, WEBGL);
  octahedron = loadModel('./chair.obj');
  tunnels = [];
  for (let r = 600; r >= 20; r -= 60) {
    let c = (r / 60) % 2 == 0 ? '#673AB7' : 'black';
    let angle = random(TWO_PI); 
    let ampi = random(1, 3); 
    tunnels.push(new Tunnel(c, r, angle, ampi));
  }
}

class Tunnel {
  constructor(color, r, angle, ampi) {
    this.color = color;
    this.r = r;
    this.angle = angle;
    this.ampi = ampi;
    this.x = this.ampi * cos(this.angle); 
    this.y = this.ampi * sin(this.angle); 
  }

  show() {
    fill(this.color);
    noStroke(); 
    ellipse(this.x, this.y, this.r);
  }

  oscillate() {
    this.angle += 2; 
    this.x = this.ampi * cos(this.angle); 
    this.y = this.ampi * sin(this.angle); 
  }
}

function draw() {
  background(220);
  for (let i = 0; i < tunnels.length; i++) {
    tunnels[i].oscillate(); 
    tunnels[i].show();
  }
  fill(225, 225, 225);
  // scale(200);
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  ambientMaterial('#FFFFF'); 
  ambientLight(mouseY);
  model(octahedron);
}
