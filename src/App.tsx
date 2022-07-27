import logo from './logo.svg';
import './App.css';
import { GamePlaysAttributes } from './interfaces/GamePlays';
import Api from './API/Api';
import fs from 'fs';
import readline from 'readline';
import { ConvertStringToInt, ConvertToGamePlayAttributes } from './utils/conertFunctions';
import { logger } from './utils/logger';

export const processLineByLine = async () => {
  const fileStream = fs.createReadStream('game.txt');

  const rl = readline.createInterface({
    input: fileStream,
    crlfDelay: Infinity
  });


  for await (const line of rl) {
      const temparoryLine = line.split("\t");
      if (temparoryLine.length == 5) {
        const gameId = ConvertStringToInt(temparoryLine[0]);
        const playId = ConvertStringToInt(temparoryLine[1]);
        const playerId = ConvertStringToInt(temparoryLine[2]);
        const x = ConvertStringToInt(temparoryLine[3]);
        const y = ConvertStringToInt(temparoryLine[4])
        if (gameId !== undefined && playerId !== undefined && playId !== undefined && x !== undefined && y !== undefined) {
          const gamePlay = ConvertToGamePlayAttributes(gameId, playId, playerId, x, y);
          if(await addGamePlay(gamePlay)){
              if(await checkWin(gamePlay)){
                return;
              }
          }
        }
      }
    }
 
};

async function play() {
  await processLineByLine()
}

async function checkWin(gamePlay: GamePlaysAttributes){

  const winRow = await Api.winRowApi.checkWinRow(gamePlay);
  const winColumn = await Api.winColumnApi.checkWinColumn(gamePlay);
  const winDiagonal = await Api.winDiagonalApi.checkWinDiagonal(gamePlay);
  if(winDiagonal! || winColumn! || winRow!) {
    logger.info(`player : ${gamePlay.playId} wins`);
    return true;
  }
  return false;
}

async function addGamePlay(gamePlay: GamePlaysAttributes) {
  const possible = await Api.gamePlayApi.IsPossible(gamePlay);

  if(possible!) {
      const add = await Api.gamePlayApi.addGamePlay(gamePlay);
      return true;
  }
  logger.info("not possible try again");
  return false;

}



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>

      <button onClick={play} name={"שחק"}/>
    </div>
  );
}

export default App;
