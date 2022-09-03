import {useEffect, useRef} from "react";

import {Canvas as StyledCanvas} from "./styles";
import Canvas from "./types";

const BubbleBackground = () => {
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
            35,
            1.25,
            0.1,
            "#2C394B",
            "#082032"
        );

        window.addEventListener("resize", canvasInstance.resizeReset.bind(canvasInstance));
        window.addEventListener("mousemove", canvasInstance.mousemove.bind(canvasInstance));
        window.addEventListener("mouseout", canvasInstance.mouseout.bind(canvasInstance));

        return () => {
            window.removeEventListener("resize", canvasInstance.resizeReset);
            window.removeEventListener("mousemove", canvasInstance.mousemove);
            window.removeEventListener("mouseout", canvasInstance.mouseout);
        };
    }, [])

    return (
        <StyledCanvas ref={canvasRef}/>
    )
}

export default BubbleBackground;
