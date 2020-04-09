const axios = require('axios');
const colors = require('colors');
const handleAPIError = require('../utils/errorhandler');

class CryptoAPI{
    constructor(apiKey) {
        this.apiKey = apiKey;
        this.baseUrl = 'https://api.nomics.com/v1/currencies/ticker';
    }

    async getPriceData(coinOption, curOption) {
        try{
            // Fomartter for currency
            const formatter = new Intl.NumberFormat('en-US', {
                style: 'currency',
                currency: curOption
            });

            const res = await axios.get(`${this.baseUrl}?key=${this.apiKey}&ids=${coinOption}&convert=${curOption}`);
            
            let output = '';

            res.data.forEach(coin => {
                output += `Coin: ${coin.symbol.yellow} (${coin.name} | Price: ${formatter.format(coin.price).green} | Rank: ${coin.rank.blue})\n`;
            });
            
            return output;
        }catch(err) { 
            handleAPIError(err);
        }
    }
}

module.exports = CryptoAPI;