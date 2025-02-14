

const baseUrl =  'https://economia.awesomeapi.com.br/json/';

export const getUSD = async () => {
    try{
        const url = baseUrl + '/last/USD-BRL';
        const request = await fetch(url);
        const json = await request.json();
    
        if(json.USDBRL){
            return parseFloat(json.USDBRL.ask);
        }
    
        return 0;
    } catch (error) {
        return 0;
    }
}

export const getEUR = async () => {
    try{
        const url = baseUrl + '/last/EUR-BRL';
        const request = await fetch(url);
        const json = await request.json();
    
        if(json.EURBRL){
            return parseFloat(json.EURBRL.ask);
        }
    
        return 0;
    } catch (error) {
        return 0;
    }
}

export const getBTC = async () => {
    try{
        const url = baseUrl + '/last/BTC-BRL';
        const request = await fetch(url);
        const json = await request.json();
    
        if(json.BTCBRL){
            return parseFloat(json.BTCBRL.ask);
        }
    
        return 0;
    } catch (error) {
        return 0;
    }
}

export const getGBP = async () => {
    try{
        const url = baseUrl + '/last/GBP-BRL';
        const request = await fetch(url);
        const json = await request.json();
    
        if(json.GBPBRL){
            return parseFloat(json.GBPBRL.ask);
        }
    
        return 0;
    } catch (error) {
        return 0;
    }
}

export const getETH = async () => {
    try{
        const url = baseUrl + '/last/ETH-BRL';
        const request = await fetch(url);
        const json = await request.json();
    
        if(json.ETHBRL){
            return parseFloat(json.ETHBRL.ask);
        }
    
        return 0;
    } catch (error) {
        return 0;
    }
}