import { logger } from "./logger";
import { GamePlaysAttributes  } from "../interfaces/GamePlays";

export const ConvertStringToInt = (sample: string) : number => {
    const temp = sample.replace(/\D/g, "");
    try{
        const number = parseInt(temp, 10);
        return number;
    }catch (err) {
        logger.error(`Couldn't convert sample to double: ${sample}, Error: ${err}`);
        return 0;
    }
    
}

export const ConvertToGamePlayAttributes = (playId: number, gameId: number, playerId: number, x: number, y: number) : GamePlaysAttributes =>{
    const gamePlay : GamePlaysAttributes ={
        playId,
        gameId,
        playerId,
        x,
        y
    };
    return gamePlay;

}
