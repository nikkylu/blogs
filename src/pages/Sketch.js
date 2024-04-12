
import { ReactP5Wrapper } from 'react-p5-wrapper';
export default function Sketch(p) {
  let octahedron;
  let tunnels = [];

  class Tunnel {
    constructor(color, r, angle, ampi) {
      this.color = color;
      this.r = r;
      this.angle = angle;
      this.ampi = ampi;
      this.x = this.ampi * p.cos(this.angle); 
      this.y = this.ampi * p.sin(this.angle); 
    }

    show() {
      p.fill(this.color);
      p.noStroke(); 
      p.ellipse(this.x, this.y, this.r);
    }

    oscillate() {
      this.angle += 2; 
      this.x = this.ampi * p.cos(this.angle); 
      this.y = this.ampi * p.sin(this.angle); 
    }
  }

  p.preload = () => {
    octahedron = p.loadModel('chair.obj', true);
  };

  p.setup = () => {
    p.createCanvas(400, 400, p.WEBGL);
    for (let r = 600; r >= 20; r -= 60) {
      let c = (r / 60) % 2 === 0 ? '#673AB7' : 'black';
      let angle = p.random(p.TWO_PI); 
      let ampi = p.random(1, 3); 
      tunnels.push(new Tunnel(c, r, angle, ampi));
    }
  };

  p.draw = () => {  
    p.background(220);  
    for (let i = 0; i < tunnels.length; i++) {
      tunnels[i].oscillate(); 
      tunnels[i].show();
    }
    p.ambientLight(255);
    p.model(octahedron);
    p.scale(0.5);
    p.fill(225, 225, 225);
    p.rotateX(p.frameCount * 0.01);
    p.rotateY(p.frameCount * 0.01);
    p.ambientMaterial('#FFFFF'); 
    
  };
}
