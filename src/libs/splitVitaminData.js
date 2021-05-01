export const splitVitaminData = (vitaminData) => {
    const splited = vitaminData.split("&");
    const obj = {
        id: splited[0],
        title: splited[1],
        price: splited[2],
    };
    return obj;
}