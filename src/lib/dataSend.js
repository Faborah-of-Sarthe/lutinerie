import React from 'react';
import { toastr } from 'react-redux-toastr';
import axios from 'axios';

export const sendDataToBack = (data, target) => {
    
    toastr.info('Envoi en cours', { timeOut: 1500});
    setTimeout(() => { 
        const qs = require('qs');

        axios({
            method: 'post',
            url: target,
            data: qs.stringify(data)
        }).then(res => {
            if (res.data.status == 1) {
                setTimeout(() => { history.back() }, 1000);
            } else if (res.data.message){
                toastr.error(res.data.message);
            }
        })
        .catch(function (error) {
            console.log(error);
        });

    }, 2000);
}