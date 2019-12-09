module.exports = (data) => {
    if (typeof (data) === 'string') return data;
    
    let query = [];
    
    for (let param in data) {
        if (data.hasOwnProperty(param)) {
            query.push(encodeURI(param + '=' + data[param]));
        }
    }

    return query.join('&');
}