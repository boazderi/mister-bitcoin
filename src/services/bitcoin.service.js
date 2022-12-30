import Axios from 'axios'


async function getRate(coins){
    const currRate = await Axios.get('https://blockchain.info/tobtc?currency=USD&value=1')
    return (currRate.data * coins)
}

function getMarketPrice(){

}

function getConfirmedTransactions(){
    
}

export const bitcoinService = {
    getRate,
    getMarketPrice,
    getConfirmedTransactions
}