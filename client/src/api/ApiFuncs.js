import axios from "axios";

const createUser = async (age, gender, name) => {
    const postUserToServer = await axios.post(`${process.env.REACT_APP_SERVER_DOMAIN}/api/users/`, {
        age: age,
        gender: gender,
        name: name
    });
    return postUserToServer.data;
}

const getBaseGames = async () => {
    const baseGameList = await axios.get(`${process.env.REACT_APP_SERVER_DOMAIN}/api/base-games/`)
    return baseGameList.data;
}

const getContentBasedRecommendation = async (baseGameNameList) => {
    const contentBasedRecommendationList = await axios.post(`${process.env.REACT_APP_SERVER_DOMAIN}/api/recommend/content-based/`, {
        steam_game_name: baseGameNameList,
    });
    return contentBasedRecommendationList.data;
}

const getCollaborativeBasedRecommendation = async (baseGameIdList) => {
    const collaborativeBasedRecommendationList = await axios.post(`${process.env.REACT_APP_SERVER_DOMAIN}/api/recommend/collaborative/`, {
        game_id_list: baseGameIdList,
    })
    return collaborativeBasedRecommendationList.data;
}

const getRandomRecommendation = async () => {
    const randomRecommendationList = await axios.post(`${process.env.REACT_APP_SERVER_DOMAIN}/api/recommend/random/`, {});
    return randomRecommendationList.data;
}

const clickLike = async () => {
}

const clickGame = async () => {
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
