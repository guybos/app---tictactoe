import axios from "axios";
import { BASE_URL } from "./Api";
import { GamePlaysAttributes } from "../interfaces/GamePlays";

const checkWinDiagonal = async (game: GamePlaysAttributes) => {
    const result = await axios.get<boolean>(`${BASE_URL}/api/win/diagonal`, {
        params: {
            gameId: game.gameId,
            playerId: game.playerId,
        }
    });
    return result;
}

const winDiagonalApi = {
    checkWinDiagonal
}

export default winDiagonalApi;