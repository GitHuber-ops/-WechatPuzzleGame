import React, { useState } from 'react';

import JigsawPiece from "./JigsawPiece";

import "./DroppablePiece.css";
import gameState from '../gameState';

interface DroppablePieceProps {
    x: number;
    y: number;
}

function DroppablePiece(props: DroppablePieceProps) {

    const [ishide, setIsHide] = useState(true);

    const handleDragOver = function (event: React.DragEvent<HTMLDivElement>) {
        event.preventDefault();
    }

    const handleDrop = function (event: React.DragEvent<HTMLDivElement>) {
        const dataJosn = event.dataTransfer.getData("game/piece-coordinate");
        const data: {
            x: number,
            y: number
        } = JSON.parse(dataJosn);
        if (data.x === props.x && data.y === props.y) {
            setIsHide(false);
            const setIsDropped = gameState.pieceStates[props.x][props.y].setIsDropped;
            if (setIsDropped) {
                setIsDropped(true);
            }

        }
    }

    return (
        <div
            onDragOver={handleDragOver}
            onDrop={handleDrop}
            className={`Droppable-piece${ishide ? " Droppable-piece-hide" : ""}`}
        >
            <JigsawPiece
                x={props.x}
                y={props.y}
                className="Droppable-piece-canvas"
            />
        </div>
    )

}

export default DroppablePiece;