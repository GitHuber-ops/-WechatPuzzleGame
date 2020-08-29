import { useState } from "react";

interface PieceState {
  setIsDropped: React.Dispatch<React.SetStateAction<boolean>> | undefined;
  isFinished: boolean;
}

class GameState {
  imgSrc: string;
  sliceNum: number;
  pieceStates: Array<Array<PieceState>>;
  constructor(imgSrc: string, sliceNum: number) {
    this.imgSrc = imgSrc;
    this.sliceNum = sliceNum;
    this.pieceStates = new Array<Array<PieceState>>(sliceNum);
    for (let i = 0; i < sliceNum; i++) {
      this.pieceStates[i] = new Array<PieceState>(sliceNum);
      for (let j = 0; j < sliceNum; j++) {
        this.pieceStates[i][j] = {
          setIsDropped: undefined,
          isFinished: false,
        };
      }
    }
  }
  useIsDropped(x: number, y: number) {
    const [isDropped, setIsDropped] = useState(false);
    this.pieceStates[x][y].setIsDropped = setIsDropped;
    return isDropped;
  }
}

const gameState = new GameState("puzzle.png", 4);

export default gameState;
