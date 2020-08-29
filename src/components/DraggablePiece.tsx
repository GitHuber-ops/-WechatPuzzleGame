import React, { useState } from 'react';
import JigsawPiece from "./JigsawPiece";

import "./DraggablePiece.css"
import gameState from '../gameState';

interface DraggablePieceProps {
    x: number,
    y: number,
    className?: string
}

function DraggablePiece(props: DraggablePieceProps) {

    const [ishide, setIsHide] = useState(false);

    let isDropped = gameState.useIsDropped(props.x, props.y);

    const isAndroid = /(android)/i.test(navigator.userAgent);

    const handleDragStart = function (event: React.DragEvent<HTMLDivElement>) {
        event.dataTransfer.setData("game/piece-coordinate", JSON.stringify({
            x: props.x,
            y: props.y
        }));
        event.dataTransfer.dropEffect = "move";


        if (!isAndroid) {
            setTimeout(() => {
                setIsHide(true);
            }, 1)
        }
    }

    const handleDragEnd = function (event: React.DragEvent<HTMLDivElement>) {

        if (!isAndroid) {
            setIsHide(false);
        }
    }

    if (isDropped) {
        return null;
    }
    else
        return (
            <div onDragStart={handleDragStart} onDragEnd={handleDragEnd} draggable="true" className={props.className}>
                <JigsawPiece
                    x={props.x}
                    y={props.y}
                    className={["Draggable-piece", ishide ? "Draggable-piece-hide" : undefined].join(" ")}

                />
            </div>
        )
}

export default DraggablePiece;