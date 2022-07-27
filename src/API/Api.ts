
import gameApi from './gameApi'
import gamePlayApi from './GamePlayApi';
import winColumnApi from './winColumnApi';
import winDiagonalApi from './winDiagonalApi';
import winRowApi from './winRowApi';
export const BASE_URL = "localhost:4000/api";

const Api = {
    gameApi,
    gamePlayApi,
    winColumnApi,
    winRowApi,
    winDiagonalApi
};

export default Api;