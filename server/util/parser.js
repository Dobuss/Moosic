function parseError(error){
    if(error.name == 'ValidationError'){
        return Object.values(error.errors).map(v => v.message);
    } else if(Array.isArray(error)){
        return error.map(v => v.msg);
    } else {
        return error.message.split('\n');
    }
}

module.exports = {
    parseError
}