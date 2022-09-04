interface ISize {
    width: number;
    height: number;
}

interface IMousePosition {
    x: number | undefined;
    y: number | undefined;
}

interface ICirclePosition {
    x: number;
    y: number;
}

class Circle {
    circleRadius: number;
    circlePosition: ICirclePosition;
    ctx: CanvasRenderingContext2D;
    ratio: number;
    radius: number;
    targetRadius: number;
    speed: number;
    color: string;

    constructor(i: number,
                j: number,
                circleRadius: number,
                ctx: CanvasRenderingContext2D,
                circleRatio: number,
                circleSpeed: number,
                circleColor: string
    ) {
        this.circleRadius = circleRadius;
        this.circlePosition = {
            x: circleRadius + (circleRadius * 2 * j),
            y: circleRadius + (circleRadius * 2 * i)
        }
        this.ctx = ctx;

        this.ratio = circleRatio;
        this.radius = circleRadius * this.ratio;
        this.targetRadius = this.radius;
        this.speed = circleSpeed;
        this.color = circleColor;
    }

    draw() {
        this.ctx.beginPath();
        this.ctx.arc(this.circlePosition.x, this.circlePosition.y, this.radius, 0, Math.PI * 2);
        this.ctx.fillStyle = this.color;
        this.ctx.fill();
        this.ctx.closePath();
    }

    update(mousePosition: IMousePosition) {
        let distance: number;

        if (mousePosition.x && mousePosition.y) {
            const dx = mousePosition.x - this.circlePosition.x;
            const dy = mousePosition.y - this.circlePosition.y;
            distance = Math.sqrt(dx * dx + dy * dy);
        } else {
            distance = Infinity;
        }

        if (distance < this.circleRadius * 5) {
            const d = distance / (this.circleRadius * 5);
            this.targetRadius = this.circleRadius * (this.ratio * d);
        } else {
            this.targetRadius = this.circleRadius * this.ratio;
        }

        if (this.radius !== this.targetRadius) {
            this.radius += (this.targetRadius - this.radius) * this.speed;
        }

        if (Math.abs(this.radius - this.targetRadius) < 0.1) {
            this.radius = this.targetRadius;
        }
    }
}

class Canvas {
    windowSize: ISize = {
        width: window.innerWidth,
        height: window.innerHeight
    };
    mousePosition: IMousePosition = {
        x: undefined,
        y: undefined
    };
    circles: Circle[] = [];
    canvas: HTMLCanvasElement;
    ctx: CanvasRenderingContext2D;
    crossingColor: string;

    constructor(
        canvas: HTMLCanvasElement,
        ctx: CanvasRenderingContext2D,
        circleRadius: number,
        circleRatio: number,
        circleSpeed: number,
        circleColor: string,
        circleCrossingColor: string
    ) {
        this.canvas = canvas;
        this.ctx = ctx;
        this.crossingColor = circleCrossingColor;

        this.resizeReset();
        for (let i = 0; i < window.innerHeight / circleRadius; i++) {
            for (let j = 0; j < window.innerWidth / circleRadius; j++) {
                this.circles.push(new Circle(i, j, circleRadius, this.ctx, circleRatio, circleSpeed, circleColor));
            }
        }
        this.animationLoop();
    }

    resizeReset() {
        this.windowSize = {
            width: window.innerWidth,
            height: window.innerHeight
        }
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
    }

    mousemove(e: MouseEvent) {
        this.mousePosition = {
            x: e.x,
            y: e.y
        }
    }

    mouseout() {
        this.mousePosition = {
            x: undefined,
            y: undefined
        }
    }

    animationLoop() {
        this.ctx.clearRect(0, 0, this.windowSize.width, this.windowSize.height);
        this.ctx.globalCompositeOperation = "xor";

        this.ctx.fillStyle = this.crossingColor;
        this.ctx.fillRect(0, 0, this.windowSize.width, this.windowSize.height);

        this.drawScene();
        requestAnimationFrame(this.animationLoop.bind(this));
    }

    drawScene() {
        this.circles.map((circle: Circle) => {
            circle.update.call(circle, this.mousePosition);
            circle.draw.call(circle);
            return circle;
        })
    }
}

export default Canvas;