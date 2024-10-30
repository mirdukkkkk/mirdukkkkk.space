import { Component, createRef } from "preact";
import styles from "../styles/pages/Niko.module.styl";

class Niko extends Component {
    slide = createRef<HTMLDivElement>();
    video = createRef<HTMLVideoElement>();
    audio = createRef<HTMLAudioElement>();

    createImage = (width: number, height: number) => {
        if (!this.video.current) return;

        const canvas = document.createElement("canvas");
        canvas.width = width;
        canvas.height = height;

        const context = canvas.getContext("2d")!;
        context.drawImage(this.video.current, 0, 0, width, height);
        const data = canvas.toDataURL("image/png");

        canvas.remove();
        return data;
    };

    playAudio = async () => {
        if (!this.audio.current) return;
        this.audio.current.play();
    };

    handleEvent = () => {
        if (!this.slide.current) return;
        this.slide.current.remove();
        this.playAudio();
        document.body.removeEventListener("click", this.handleEvent);
        document.body.removeEventListener("keydown", this.handleEvent);
    };

    componentWillMount() {
        document.body.addEventListener("click", this.handleEvent);
        document.body.addEventListener("keydown", this.handleEvent);

        setInterval(() => {
            const niko_cursor = this.createImage(32, 32);
            document.body.style.cursor = `url('${niko_cursor}'), auto`;
        }, 100);
    }

    render() {
        return (
            <>
                <video
                    src="/niko/niko-oneshot.mp4"
                    className={styles.video}
                    ref={this.video}
                    playsinline
                    autoplay
                    muted
                    loop
                />
                <audio
                    ref={this.audio}
                    style={{ display: "none" }}
                    src="/niko/shoeshine.mp3"
                    preload="auto"
                    loop
                />
                <div className={styles.slide} ref={this.slide}>
                    <div className={styles.text}>click somewhere</div>
                </div>
            </>
        );
    }
}

export default Niko;
