import React from "react";
import { useEffect } from "react";

const CustomCursor = () => {
    const [position, setPosition] = React.useState({ x: 0, y: 0 });

    useEffect(() => {
        const moveCursor = (e) => {
            setPosition({ x: e.clientX, y: e.clientY });
        };
        
        window.addEventListener("mousemove", moveCursor);

        return () => {
            window.removeEventListener("mousemove", moveCursor);
        };
    })
    return (
    <div className="pointer-events-none fixed top-0 left-0 w-full h-full z-[9999]" style={{transform: `translate3d(${position.x - 40}px, ${position.y - 40}px, 0)`}}>
        <div className="w-20 h-20 rounded-full bg-[#915eff] blur-3xl opacity-80"/>

    </div>
    )
}

export default CustomCursor; 