import axios from "axios";
import { BASE_URL } from "./Api";
import { GamePlaysAttributes } from "../interfaces/GamePlays";

const checkWinColumn = async (game: GamePlaysAttributes) => {
    const result = await axios.get<boolean>(`${BASE_URL}/api/win/column`, {
        params: {
            gameId: game.gameId,
            playerId: game.playerId,
            x: game.x
        }
    });
    return result;
}

const winColumnApi = {
    checkWinColumn
}

export default winColumnApi;