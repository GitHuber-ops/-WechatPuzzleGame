import React from "react";

import GameStates from "../gameState";

import CanvasWithImg from "./CanvasWithImg";

interface JigsawPieceProps {
  className?: string;
  x: number;
  y: number;
  canvasRef?: React.RefObject<HTMLCanvasElement>;
}

function JigsawPiece(props: JigsawPieceProps) {

  const sliceNum = GameStates.sliceNum;

  const draw = function (ctx: CanvasRenderingContext2D, img: HTMLImageElement) {

    const pieceWidth = img.width / sliceNum;

    ctx.drawImage(img,
      props.x * pieceWidth, props.y * pieceWidth, img.width / sliceNum, img.height / sliceNum,
      0, 0, 300, 300);

  }

  return (
    <CanvasWithImg
      className={props.className}
      imgSrc={GameStates.imgSrc}
      drawFunc={draw}
      width={300}
      height={300}
      canvasRef={props.canvasRef}
    />
  );

}

export default JigsawPiece;
