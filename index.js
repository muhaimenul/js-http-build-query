module.exports = (data, prefix) => {
    if (typeof (data) === 'undefined' || typeof (data) !== 'object') return data
    
    let query = []

    for (let param in data) {
        if (data.hasOwnProperty(param)) {
            let key = prefix ? prefix + "[" + param + "]" : param,
                value = data[param];
                query.push(typeof v == "object" ? serialize(value, key) : encodeURIComponent(key) + "=" + encodeURIComponent(value));
        }
    }

    return query.join('&')

}