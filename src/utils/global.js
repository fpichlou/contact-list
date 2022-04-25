/**
 * Group array of objects by a property
 * @param  {Array} array Array of object
 * @param  {String} path The property path that can be nested
 * @return {Object}      The object with two properties, the group prop which is the group name and the data prop which is the grouped objects 
 */
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

/**
 * Get nested property of an object
 * @param  {Object} obj  The source object 
 * @param  {String} path The path of property
 * @return {*}           A property of given object
 */
export const getNestedProp = (obj, path) => {
    return path
        ?.replace(/\[/g, '.')
        .replace(/\]/g, '')
        .split('.')
        .reduce((o, k) => (o || {})[k], obj);
}

/**
 * Array of alphabets
 * @return Array  An array of alphabets in uppercase format
 */
export const alphabets = () => {
    return [...'abcdefghijklmnopqrstuvwxyz'.toUpperCase()];
}

/**
 * Sort array of objects alphabetically on one property 
 * @param  {Array} obj   The source array of objects 
 * @param  {String} key  The property name
 * @return {Array}       A sorted array
 */
export const sortObjectArray = (objArray, key) => {
    return objArray.sort((a, b) => a[key].toLowerCase().localeCompare(b[key].toLowerCase()))
}
