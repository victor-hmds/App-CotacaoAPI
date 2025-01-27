

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