import React from "react";

import JigsawPieceList from "../components/JigsawPieceList";
import JigsawPieceGrid from "../components/JigsawPieceGrid"

import "./Game.css";

interface GameProps {

}


function Game(props: GameProps) {
  return (
    <div className="App" >
      <div className="Game-title">
        拼图小游戏
        </div>
      <div className="Game-container">
        <JigsawPieceGrid />
      </div>
      <div className="Pieces-picker">
        <JigsawPieceList className="Jigsaw-piece"></JigsawPieceList>
      </div>
    </div>

  );
}


export default Game;
