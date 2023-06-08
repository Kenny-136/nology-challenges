const pascalCaseVariableName = "IWantToBeSnakeCase";

const convertPascalCaseToSnakeCase = () => {
    let stringArray = pascalCaseVariableName.split('')
    let result = []
    for (let i = 0; i < pascalCaseVariableName.length; i++) {
        if (i === 0) {
            result.push(stringArray[0].toLowerCase())
        } else {
            if (/[A-Z]/.test(stringArray[i])) {
                result.push('_')
                result.push(stringArray[i].toLowerCase())
            } else {
                result.push(stringArray[i])
            }
        }
    }
    return result.join('')
  };


console.log(convertPascalCaseToSnakeCase())