interface ISize {
    width: number;
    height: number;
}

interface ICoordinates {
    x: number;
    y: number;
}

class Particle {
    windowSize: ISize;
    ctx: CanvasRenderingContext2D;
    particlePosition: ICoordinates;
    color: string;
    radius: number;
    speed: number;
    directionAngle: number;
    vector: ICoordinates;

    constructor(
        ctx: CanvasRenderingContext2D,
        windowSize: ISize,
        particleColor: string,
        defaultRadius: number,
        variantRadius: number,
        defaultSpeed: number,
        variantSpeed: number
    ) {
        this.ctx = ctx;
        this.windowSize = windowSize;

        this.particlePosition = {
            x: Math.random() * this.windowSize.width,
            y: Math.random() * this.windowSize.height
        }
        this.color = particleColor;
        this.radius = defaultRadius + Math.random() * variantRadius;
        this.speed = defaultSpeed + Math.random() * variantSpeed;
        this.directionAngle = Math.floor(Math.random() * 360);
        this.vector = {
            x: Math.cos(this.directionAngle) * this.speed,
            y: Math.sin(this.directionAngle) * this.speed
        }
    }

    update() {
        this.border();
        this.particlePosition.x += this.vector.x;
        this.particlePosition.y += this.vector.y;
    }

    border() {
        if (this.particlePosition.x >= this.windowSize.width || this.particlePosition.x <= 0) {
            this.vector.x *= -1;
        }
        if (this.particlePosition.y >= this.windowSize.height || this.particlePosition.y <= 0) {
            this.vector.y *= -1;
        }
        if (this.particlePosition.x > this.windowSize.width) this.particlePosition.x = this.windowSize.width;
        if (this.particlePosition.y > this.windowSize.height) this.particlePosition.y = this.windowSize.height;
        if (this.particlePosition.x < 0) this.particlePosition.x = 0;
        if (this.particlePosition.y < 0) this.particlePosition.y = 0;
    }

    draw() {
        this.ctx.beginPath();
        this.ctx.arc(this.particlePosition.x, this.particlePosition.y, this.radius, 0, Math.PI * 2);
        this.ctx.closePath();
        this.ctx.fillStyle = this.color;
        this.ctx.fill();
    }
}

class Canvas {
    windowSize: ISize = {
        width: window.innerWidth,
        height: window.innerHeight
    };
    canvas: HTMLCanvasElement;
    ctx: CanvasRenderingContext2D;
    particleColor: string;
    lineColor: string;
    particleAmount: number;
    defaultRadius: number;
    variantRadius: number;
    defaultSpeed: number;
    variantSpeed: number;
    linkRadius: number;
    particles: Particle[] = [];
    rgb: RegExpMatchArray | null;

    constructor(
        canvas: HTMLCanvasElement,
        ctx: CanvasRenderingContext2D,
        particleColor: string,
        lineColor: string,
        particleAmount: number,
        defaultRadius: number,
        variantRadius: number,
        defaultSpeed: number,
        variantSpeed: number,
        linkRadius: number
    ) {
        this.canvas = canvas;
        this.ctx = ctx;

        this.particleColor = particleColor;
        this.lineColor = lineColor;
        this.particleAmount = particleAmount;
        this.defaultRadius = defaultRadius;
        this.variantRadius = variantRadius;
        this.defaultSpeed = defaultSpeed;
        this.variantSpeed = variantSpeed;
        this.linkRadius = linkRadius;

        this.rgb = lineColor.match(/\d+/g);

        this.resizeReset();
        this.initialiseElements();
        requestAnimationFrame(this.animationLoop.bind(this));
    }

    resizeReset() {
        this.windowSize = {
            width: window.innerWidth,
            height: window.innerHeight
        }
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
    }

    initialiseElements() {
        for (let i = 0; i < this.particleAmount; i++) {
            this.particles.push(new Particle(
                this.ctx,
                this.windowSize,
                this.particleColor,
                this.defaultRadius,
                this.variantRadius,
                this.defaultSpeed,
                this.variantSpeed
            ));
        }
    }

    animationLoop() {
        this.ctx.clearRect(0, 0, this.windowSize.width, this.windowSize.height);
        this.drawScene();

        requestAnimationFrame(this.animationLoop.bind(this));
    }

    drawScene() {
        this.drawLine();
        this.drawParticle();
    }

    drawParticle() {
        this.particles.map((particle: Particle) => {
            particle.update.call(particle);
            particle.draw.call(particle);
            return particle;
        })
    }

    drawLine() {
        this.particles.map((particle: Particle) => {
            this.linkPoints(particle);
            return particle;
        })
    }

    linkPoints(currentParticle: Particle) {
        this.particles.map((particle: Particle) => {
            const distance = this.checkDistance(
                currentParticle.particlePosition.x,
                currentParticle.particlePosition.y,
                particle.particlePosition.x,
                particle.particlePosition.y
            );
            const opacity = 1 - distance / this.linkRadius;
            if (opacity > 0 && this.rgb) {
                this.ctx.lineWidth = 0.5;
                this.ctx.strokeStyle = 'rgba(' + this.rgb[0] + ',' + this.rgb[1] + ',' + this.rgb[2] + ',' + opacity + ')';
                this.ctx.beginPath();
                this.ctx.moveTo(currentParticle.particlePosition.x, currentParticle.particlePosition.y);
                this.ctx.lineTo(particle.particlePosition.x, particle.particlePosition.y);
                this.ctx.closePath();
                this.ctx.stroke();
            }
            return particle;
        })
    }

    checkDistance(x1: number, y1: number, x2: number, y2: number) {
        return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
    }
}

export default Canvas;
