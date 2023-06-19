// Swap keys with values

const translate = {
    apple: "jablko",
    pear: "gruszka",
    strawberry: "truskawka",
};

/* const newObj = {
    jablko: "apple",
    gruszka: "pear",
    truskawka: "strawberry"
} */


const swapKeys = (obj) => {
    const keyArr = Object.keys(obj)
    const valueArr = Object.values(obj)

    return valueArr.reduce((result, value, index) => {
        result[value] = keyArr[index]
        return result
    }, {})
};

console.log(swapKeys(translate))