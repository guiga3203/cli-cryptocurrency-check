// Handle error in case of key malfunction

function handleAPIError(err){
    if(err.response.status === 401){
        throw new Error('Your API key is invalid');
    }else if (err.response.status === 404){
        throw new Error('Your API key is not responding');
    }else{
        throw new Error('Something went bad, please try again');
    }
}

module.exports = handleAPIError;