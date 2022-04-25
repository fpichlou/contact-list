export const groupBy = (array, path) => {
    let data = array.reduce((result, item) => {

        // get first letter of name of current element
        let group = getNestedProp(item, path).toUpperCase();

        // if there is no property in accumulator with this letter create it
        if (!result[group]) result[group] = { group, data: [item] }

        // if there is push current element to children array for that letter
        else result[group].data.push(item);

        return result;
    }, {});

    return Object.values(data)
}

export const getNestedProp = (obj, path) => {
    return path
        ?.replace(/\[/g, '.')
        .replace(/\]/g, '')
        .split('.')
        .reduce((o, k) => (o || {})[k], obj);
}


export const alphabets = () => {
    return [...'abcdefghijklmnopqrstuvwxyz'.toUpperCase()];
}

export const sortObjectArray = (objArray, key) => {
    return objArray.sort((a, b) => a[key].toLowerCase().localeCompare(b[key].toLowerCase()))
}
