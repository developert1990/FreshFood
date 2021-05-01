
export const getNutrition = (body_html) => {
    const stringVal = body_html.replace(/(<([^>]+)>)/gi, "").split(', ');
    const splitedString = stringVal.map((data) => data.split(" "))
    const arr = [];
    splitedString.map((data) => {
        if (data.length === 1) {
            return null;
        } else {
            const obj = {};
            obj[data[1]] = data[0];
            return arr.push(obj);
        }
    })
    return arr;
}