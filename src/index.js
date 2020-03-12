import { $ } from "@dekproject/scope";
import request from 'request';

class Comtele{
    constructor(authKey, Sender){
        this.authKey = authKey;
        this.Sender = Sender;
    }

    send(Receivers, Content){
        request({
            method: "POST",
            url: "https://sms.comtele.com.br/api/v2/send",
            headers: {
                "content-type": "application/json",
                "auth-key": this.authKey
            }
        }, {
            Sender: this.Sender,
            Receivers,
            Content 
        }, (error, response, body) => {
            if (error) throw new Error(error);          
            console.log(body);
        });
    }
}

export default () => {
    try{
        if(!process.env.hasOwnProperty('COMTELE_KEY') || !process.env.hasOwnProperty('COMTELE_SENDER')){
            console.log('[ Comtele ] - There is no COMTELE_KEY or COMTELE_SENDER variable in the .env file.');
        }
        else{
            const comtele = new Comtele(process.env.COMTELE_KEY, process.env.COMTELE_SENDER);
            $.set("comtele", comtele);
        }
    }
    catch (e) {
        console.log(`[ Comtele ] - ${e.message}`);
    }
}
