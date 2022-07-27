import axios from "axios";
import { BASE_URL } from "./Api";
import { GamePlaysAttributes } from "../interfaces/GamePlays";

const checkWinRow = async (game: GamePlaysAttributes) => {
    const result = await axios.get<boolean>(`${BASE_URL}/api/win/row`, {
        params: {
            gameId: game.gameId,
            playerId: game.playerId,
            y: game.y
        }
    });
    return result;
}

const winRowApi = {
    checkWinRow
}

export default winRowApi;