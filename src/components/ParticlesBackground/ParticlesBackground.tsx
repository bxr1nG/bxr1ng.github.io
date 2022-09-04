import {useEffect, useRef} from "react";

import {Canvas as StyledCanvas} from "./styles";
import Canvas from "./types";

const ParticlesBackground = () => {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) {
            return;
        }
        const ctx = canvas.getContext("2d");
        if (!ctx) {
            return;
        }

        const canvasInstance = new Canvas(
            canvas,
            ctx,
            "#FF4C29",
            "rgba(51,71,86)",
            window.innerHeight > window.innerWidth ? window.innerHeight / 50 : window.innerWidth / 50,
            2,
            1,
            .1,
            .5,
            window.innerHeight > window.innerWidth ? window.innerHeight / 3 : window.innerWidth / 3,
        );

        window.addEventListener("resize", canvasInstance.resizeReset.bind(canvasInstance));

        return () => {
            window.removeEventListener("resize", canvasInstance.resizeReset);
        };
    }, [])

    return (
        <StyledCanvas ref={canvasRef}/>
    )
}

export default ParticlesBackground;
