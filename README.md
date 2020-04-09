#  Coindex

A CLI (Command Line Interface) system for checking cryptocurrency using Nomics API for getting the data

## Installing

npm install

npm link

## Usage

# API Key Commands
coindex key set                     // For seting a key that you can get on https://nomics.com/
coindex key show                    // Show the current key in usage
coindex key remove                  // Remove the current key

# Crypto Check Commands
coindex check price                 // Check the price for the default coins: BTN,ETH,XRP. In the default currency: USD

# Check Specific coins
coindex check --coin=XXX,XXX        // In XXX put the ISO code for the coin

# Choose Currency
coindex check --cur=XXX             // In XXX put the ISO code for the currency

### Version

1.0.0

### License

MIT
