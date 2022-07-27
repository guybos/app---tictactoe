import axios from "axios";
import { BASE_URL } from "./Api";
import { GamePlaysAttributes } from "../interfaces/GamePlays";

const addGamePlay = async (game: GamePlaysAttributes) => {
    const result = await axios.post<GamePlaysAttributes>(`${BASE_URL}/api/gamePlay`, game);
    return result;
}

const IsPossible = async (game: GamePlaysAttributes) => {
    const result = await axios.get<boolean>(`${BASE_URL}/api/gamePlay`, {
        params:
        {
            gameId: game.gameId,
            x: game.x,
            y: game.y
        }
    });
    return result;
}

const gamePlayApi = {
    addGamePlay,
    IsPossible
}

export default gamePlayApi;