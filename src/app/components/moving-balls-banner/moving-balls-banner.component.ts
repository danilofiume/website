import { Component, OnInit, HostListener, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-moving-balls-banner',
  templateUrl: './moving-balls-banner.component.html',
  styleUrls: ['./moving-balls-banner.component.css']
})
export class MovingBallsBannerComponent implements OnInit, OnDestroy {
  private canvas: any;
  private ctx: any;
  private balls: Ball[] = [];
  private ballCount = 50; // Aumentato il numero di sfere
  private animationFrameId: any;

  constructor() { }

  ngOnInit(): void {
    this.canvas = document.getElementById('canvas') as HTMLCanvasElement;
    this.ctx = this.canvas.getContext('2d');
    this.resizeCanvas();
    this.initBalls();
    this.animate();
  }

  @HostListener('window:resize')
  onResize() {
    this.resizeCanvas();
  }

  private resizeCanvas(): void {
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
  }

  private initBalls(): void {
    this.balls = [];
    for (let i = 0; i < this.ballCount; i++) {
      const radius = 50; // Aumentato il raggio delle sfere
      const x = Math.random() * (this.canvas.width - radius * 2) + radius;
      const y = Math.random() * (this.canvas.height - radius * 2) + radius;
      const dx = (Math.random() - 0.5) * 4;
      const dy = (Math.random() - 0.5) * 4;
      const color = this.getRandomColor(); // Assegna un colore casuale
      this.balls.push(new Ball(x, y, dx, dy, radius, color, this.canvas, this.ctx));
    }
  }

  private getRandomColor(): string {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  private animate(): void {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.balls.forEach(ball => ball.update());
    this.animationFrameId = requestAnimationFrame(() => this.animate());
  }

  ngOnDestroy(): void {
    cancelAnimationFrame(this.animationFrameId);
  }
}

class Ball {
  constructor(
    public x: number,
    public y: number,
    public dx: number,
    public dy: number,
    public radius: number,
    public color: string,
    private canvas: HTMLCanvasElement,
    private ctx: CanvasRenderingContext2D
  ) {}

  draw(): void {
    this.ctx.beginPath();
    this.ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    this.ctx.fillStyle = this.color;
    this.ctx.fill();
    this.ctx.closePath();
  }

  update(): void {
    if (this.x + this.radius > this.canvas.width || this.x - this.radius < 0) {
      this.dx = -this.dx;
    }

    if (this.y + this.radius > this.canvas.height || this.y - this.radius < 0) {
      this.dy = -this.dy;
    }

    this.x += this.dx;
    this.y += this.dy;

    this.draw();
  }
}
