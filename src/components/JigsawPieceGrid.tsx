import React from "react";

import DroppablePiece from "./DroppablePiece";

import "./JigsawPieceGrid.css"
import gameState from "../gameState";

interface JigsawPieceGridProps {
    className?: string;
}

interface JigsawPieceGridParam {
    x: number;
    y: number;
}

function JigsawPieceGrid(props: JigsawPieceGridProps) {
    function generateParameters(sliceNum: number) {
        let parameters: JigsawPieceGridParam[] = [];
        for (let i = 0; i < sliceNum; i++) {
            for (let j = 0; j < sliceNum; j++) {
                parameters.push({
                    x: j,
                    y: i
                })
            }
        }
        return parameters;
    }

    const sliceNum = gameState.sliceNum;

    const params = generateParameters(sliceNum);



    const pieces = params.map(
        params => (
            <DroppablePiece x={params.x} y={params.y} key={JSON.stringify(params)} />
        )
    );

    const styles = {
        gridTemplateColumns: `repeat(${sliceNum}, minmax(0, 1fr))`,
        gridTemplateRows: `repeat(${sliceNum}, minmax(0, 1fr))`
    }

    return (
        <div className="Jigsaw-piece-grid" style={styles}>
            {pieces}
        </div>
    );
}

export default JigsawPieceGrid