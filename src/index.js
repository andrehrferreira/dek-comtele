import { $ } from "@dekproject/scope";
import request from 'request';

class Comtele{
    constructor(authKey, sender){
        this.authKey = authKey;
        this.sender = sender;
    }

    send(receivers, content){
        return new Promise((resolve, reject) => {
            request({
                method: "POST",
                uri: "https://sms.comtele.com.br/api/v2/send",
                headers: {
                    "content-type": "application/json",
                    "auth-key": this.authKey
                },
                form: {
                    sender: this.sender,
                    receivers,
                    content 
                }
            }, (err, res) => {
                if (err) reject(err);   
                else resolve();
            });
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
