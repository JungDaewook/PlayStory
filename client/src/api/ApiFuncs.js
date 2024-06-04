import axios from "axios";

const createUser = async (age, gender, name) => {
    const postUserToServer = await axios.post(`${process.env.REACT_APP_SERVER_DOMAIN}/users/`, {
        age: age,
        gender: gender,
        name: name
    });
    return postUserToServer.data;
}

const getBaseGames = async () => {
    const baseGameList = await axios.get(`${process.env.REACT_APP_SERVER_DOMAIN}/base-games/`)
    return baseGameList.data;
}

const getContentBasedRecommendation = async (baseGameNameList) => {
    const contentBasedRecommendationList = await axios.post(`${process.env.REACT_APP_SERVER_DOMAIN}/recommend/content-based/`, {
        steam_game_name: baseGameNameList,
    });
    return contentBasedRecommendationList.data;
}

const getCollaborativeBasedRecommendation = async (baseGameIdList) => {
    const collaborativeBasedRecommendationList = await axios.post(`${process.env.REACT_APP_SERVER_DOMAIN}/recommend/collaborative/`, {
        steam_game_name: baseGameIdList,
    })
    return collaborativeBasedRecommendationList.data;
}

const getRandomRecommendation = async () => {
    const randomRecommendationList = await axios.get(`${process.env.REACT_APP_SERVER_DOMAIN}/recommend/random/`);
    return randomRecommendationList.data;
}

const clickLike = async (gameId) => {
    const postLike = await axios.post(`${process.env.REACT_APP_SERVER_DOMAIN}/steam-games/${gameId}/likes/`)
    return postLike;
}

const clickGame = async (gameId) => {
    const postClick = await axios.post(`${process.env.REACT_APP_SERVER_DOMAIN}/steam-games/${gameId}/clicks/`)
    return postClick;
}

export {
    createUser,
    getBaseGames,
    getContentBasedRecommendation,
    getCollaborativeBasedRecommendation,
    getRandomRecommendation,
    clickLike,
    clickGame
}
