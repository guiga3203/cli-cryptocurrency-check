const Configstore = require('configstore');
const pkg = require('../package.json');

class KeyManager {
    constructor(){
        this.conf = new Configstore(pkg.name);
    }
    
    // Take the key and set on Configstore
    setKey(key){
        this.conf.set('apiKey', key);
        return key;
    }
    
    // Get the key
    getKey() {
        const key = this.conf.get('apiKey');

        // Checking for the key
        if(!key) {
            throw new Error('No API key found - Get a key on https://nomics.com');
        }

        return key;
    }

    // Delete the current key
    deleteKey() {
        const key = this.conf.get('apiKey');

        // Checking for the key
        if(!key) {
            throw new Error('No API key found to delete');
        }
        
        this.conf.delete('apiKey');

        return;
    }
}

module.exports = KeyManager;