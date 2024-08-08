import {Component, createRef} from "preact";
import config from "../../config";
import styles from './Background.module.styl';

type BackgroundProps = {
    starColor: string;
    starSpeed: number;
}

class Background extends Component<BackgroundProps> {
    canvas = createRef<HTMLCanvasElement>();

    starSize = 6;
    starMinScale = 2.5e-10;
    stars: { x: number, y: number, z: number }[] = [];
    starVelocity  = { x: 0, y: 0, tx: 0, ty: 0, z: 0.0005 };

    scale = config.background.scale;
    overflowThreshold = 50;
    pointerX: number | null = null;
    pointerY: number | null = null
    touchInput: boolean = false;

    width = window.innerWidth * this.scale;
    height = window.innerHeight * this.scale;

    constructor() {
        super();
        this.spawn();
    }

    spawn = () => {
        const starCount = (window.innerWidth + window.innerHeight) /
            (navigator.userAgent.indexOf('Firefox') > -1 ? 18 : 11);

        for(let i = 0; i < starCount; i++) this.stars.push({
            x: 0,
            y: 0,
            z: this.starMinScale + Math.random() * (1 - this.starMinScale)
        });

        console.info('[INFO] Stars spawned successfully!');
    }

    movePointer = (x: number, y: number) => {
        if(typeof this.pointerX === 'number' && typeof this.pointerY === 'number') {
            let ox = x - this.pointerX;
            let oy = y - this.pointerY;

            this.starVelocity.tx = this.starVelocity.tx + (ox / 8 * this.scale) * (this.touchInput ? 1 : -1);
            this.starVelocity.ty = this.starVelocity.ty + (oy / 8 * this.scale) * (this.touchInput ? 1 : -1);
        }

        this.pointerX = x;
        this.pointerY = y;
    }

    resize = () => {
        if(!this.canvas.current) return;

        this.width = window.innerWidth * this.scale;
        this.height = window.innerHeight * this.scale;
        this.canvas.current.width = this.width;
        this.canvas.current.height = this.height;

        this.stars.forEach((star) => {
            star.x = Math.random() * this.width;
            star.y = Math.random() * this.height;
        });
    }

    animate = () => {
        if(!this.canvas.current) return;
        const context = this.canvas.current.getContext('2d')!;

        context.clearRect(0, 0, this.width, this.height);
        this.starVelocity.tx *= 0.86;
        this.starVelocity.ty *= 0.86;
        this.starVelocity.x += (this.starVelocity.tx - this.starVelocity.x) * 0.8;
        this.starVelocity.y += (this.starVelocity.ty - this.starVelocity.y) * 0.8;

        this.stars.forEach((star) => {
            star.x += this.starVelocity.x * star.z;
            star.y += this.starVelocity.y * star.z;
            star.x += (star.x - this.width / 2) * this.starVelocity.z * star.z;
            star.y += (star.y - this.height / 2) * this.starVelocity.z * star.z;
            star.z += this.starVelocity.z;

            if(
                star.x < -this.overflowThreshold ||
                star.x > this.width + this.overflowThreshold ||
                star.y < -this.overflowThreshold ||
                star.y > this.height + this.overflowThreshold
            ) {
                let direction = 'z';
                let vx = Math.abs(this.starVelocity.x);
                let vy = Math.abs(this.starVelocity.y);

                if(vx > 1 || vy > 1) {
                    let axis;
                    if(vx > vy) axis = Math.random() < vx / (vx + vy) ? 'h' : 'v';
                    else axis = Math.random() < vy / (vx + vy) ? 'v' : 'h';
                    if(axis === 'h') direction = this.starVelocity.x > 0 ? 'l' : 'r';
                    else direction = this.starVelocity.y > 0 ? 't' : 'b';
                }
                star.z = this.starMinScale + Math.random() * (1 - this.starMinScale);
                if(direction === 'z') {
                    star.z = 0.1;
                    star.x = Math.random() * this.width;
                    star.y = Math.random() * this.height;
                }
                else if(direction === 'l') {
                    star.x = -this.overflowThreshold;
                    star.y = this.height * Math.random();
                }
                else if(direction === 'r') {
                    star.x = this.width + this.overflowThreshold;
                    star.y = this.height * Math.random();
                }
                else if(direction === 't') {
                    star.x = this.width * Math.random();
                    star.y = -this.overflowThreshold;
                }
                else if(direction === 'b') {
                    star.x = this.width * Math.random();
                    star.y = this.height + this.overflowThreshold;
                }
            }
        });

        this.stars.forEach((star) => {
            context.beginPath();
            context.lineCap = 'round';
            context.lineWidth = this.starSize * star.z * this.scale;
            context.globalAlpha = 0.5 + 0.5 * Math.random();
            context.strokeStyle = this.props.starColor;
            context.beginPath();
            context.moveTo(star.x, star.y);
            let tailX = this.starVelocity.x * 2,
                tailY = this.starVelocity.y * 2;

            if(Math.abs(tailX) < 0.1) tailX = 0.5;
            if(Math.abs(tailY) < 0.1) tailY = 0.5;

            context.lineTo(star.x + tailX, star.y + tailY);
            context.stroke();
        });

        requestAnimationFrame(this.animate);
    }

    componentWillUnmount() {
        window.onresize = null;
        document.onmousemove = null;
        document.ontouchmove = null;
        document.ontouchend = null;
        document.onmouseleave = null;
        console.info('[INFO] Background has been removed!');
    }

    componentWillReceiveProps(props: BackgroundProps) {
        this.starVelocity.z = props.starSpeed;
    }

    componentWillMount() {
        window.onresize = this.resize;
        document.onmousemove = (event) => {
            this.touchInput = false;
            this.movePointer(event.clientX, event.clientY);
        }
        document.ontouchmove = (event) => {
            this.touchInput = true;
            this.movePointer(event.touches[0].clientX, event.touches[0].clientY);
            event.preventDefault();
        }
        document.ontouchend = () => {
            this.pointerX = null;
            this.pointerY = null;
        }
        document.onmouseleave = () => {
            this.pointerX = null;
            this.pointerY = null;
        }
        console.info('[INFO] Background events are attached!');
    }

    componentDidMount() {
        this.resize();
        this.animate();
        console.info('[INFO] Background animation started!');
    }

    render() {
        return (
            <canvas
                className={styles.background}
                ref={this.canvas}
            />
        );
    }
}

export default Background;