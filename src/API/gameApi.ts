import axios from "axios";
import { BASE_URL } from "./Api";
import { GameAttributes } from "../interfaces/Game";

const addGame = async (game: GameAttributes) => {
    const result = await axios.post<GameAttributes>(`${BASE_URL}/api/game`, game);
    return result;
}

const getGame = async (game: GameAttributes) => {
    const result = await axios.get<GameAttributes>(`${BASE_URL}/api/game`, {params: {game}});
    return result;
}

const gameApi = {
    addGame,
    getGame
}

export default gameApi;