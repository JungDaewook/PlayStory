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

const getContentBasedRecommendation = async (baseGameList) => {
    const contentBasegRecommendationList = await axios.post(`${process.env.REACT_APP_SERVER_DOMAIN}/api/recommend/`, {
        steam_game_name: baseGameList,
    });
    return contentBasegRecommendationList.data;
}

// const getNftListByApi = async (ownerAddress, contractAddress) => {
//     const nftList = await axios.get(`${process.env.REACT_APP_SERVER_DOMAIN}/api/v1/nfts/metadata?ownerAddress=${ownerAddress}&contractAddress=${contractAddress}`
//         , {withCredentials: true});
//     return nftList.data;
// }
//
// const postCanvasToDatabase = async (imageUri, nftName, ownerAddress, contractAddress) => {
//     const postNftToServer = await axios.post(`${process.env.REACT_APP_SERVER_DOMAIN}/api/v1/nfts`, {
//         imageUri: imageUri,
//         nftName: nftName,
//         ownerAddress: ownerAddress,
//         contractAddress: contractAddress
//     }, {withCredentials: true});
//     return postNftToServer;
// }
//
// const writeObjectToServer = async (object, fileName) => {
//     await axios.post(`${process.env.REACT_APP_SERVER_DOMAIN}/api/v1/nfts/metadata`, {
//         stringifyObject: JSON.stringify(object),
//         fileName: fileName
//     }, {withCredentials: true})
//     return;
// }
//
// const putImageUriToDatabase = async (nftId, imageUri) => {
//     const updatingNft = await axios.put(`${process.env.REACT_APP_SERVER_DOMAIN}/api/v1/nfts`, {
//         nftId: nftId,
//         imageUri: imageUri
//     }, {withCredentials: true})
//     return updatingNft.data;
// }
//
// const getNftListByApi = async (ownerAddress, contractAddress) => {
//     const nftList = await axios.get(`${process.env.REACT_APP_SERVER_DOMAIN}/api/v1/nfts/metadata?ownerAddress=${ownerAddress}&contractAddress=${contractAddress}`
//         , {withCredentials: true});
//     return nftList.data;
// }
//
// const deleteNftFromDatabase = async (nftId) => {
//     await axios.delete(`${process.env.REACT_APP_SERVER_DOMAIN}/api/v1/nfts/${nftId}`
//         , {withCredentials: true});
//     return;
// }
//
// const deleteFileFromDirectory = async (fileName) => {
//     await axios.delete(`${process.env.REACT_APP_SERVER_DOMAIN}/api/v1/nfts?fileName=${fileName}`
//         , {withCredentials: true});
//     return;
// }

export {
    createUser,
    getBaseGames,
    getContentBasedRecommendation
}
