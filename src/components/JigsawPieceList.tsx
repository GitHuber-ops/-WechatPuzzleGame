import React from "react";

import GameStates from "../gameState";

import DraggablePiece from "./DraggablePiece";

import "./JigsawPieceList.css"

interface JigsawPieceListProps {
  className?: string;
}

interface JigsawPieceListParam {
  x: number;
  y: number;
}


function JigsawPieceList(props: JigsawPieceListProps) {
  function generateParameters(sliceNum: number) {
    let parameters: JigsawPieceListParam[] = [];
    for (let i = 0; i < sliceNum; i++) {
      for (let j = 0; j < sliceNum; j++) {
        parameters.push({
          x: i,
          y: j
        })
      }
    }
    return parameters;
  }
  function shuffle(a: JigsawPieceListParam[]) {
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  const sliceNum = GameStates.sliceNum;

  const params = generateParameters(sliceNum);
  shuffle(params);
  const pieces = params.map(
    params => (

      <DraggablePiece
        x={params.x}
        y={params.y}
        key={JSON.stringify(params)}
        className="Piece-list-piece"
      />
    )
  );

  let styles: React.CSSProperties = {};

  let pieceLength: string;
  if (document.body.clientWidth / document.body.clientHeight > 2 / 3) {
    pieceLength = `calc(60vh / ${sliceNum})`;
  } else {
    pieceLength = `calc(90vw / ${sliceNum})`;
  }

  styles.height = pieceLength;


  return (
    <div style={styles} className="Jigsaw-piece-list">
      {pieces}
    </div>
  );

}

export default JigsawPieceList