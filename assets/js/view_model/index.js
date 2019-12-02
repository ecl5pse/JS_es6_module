'use strict';

import {timerValueElem , timerResetElem, timerStartElem , timerStopElem} from '../model/controls.js'


const data = new Date();
data.setHours(0,0,0,0);

let intervalid = null;

timerStartElem.onclick = function () {
    if (intervalid){
        return;
    }
    intervalid = setInterval(incrementDateSecond ,1000);

};


timerStopElem.onclick = function () {
    if(intervalid){
        clearInterval(intervalid);
        intervalid= null;

    }

};

function incrementDateSecond() {

    data.setSeconds(data.getSeconds() + 1);
    refreshTimerValue();

}

function refreshTimerValue() {
    timerValueElem.innerText = `${myFormat(data.getMinutes())}:${myFormat(data.getSeconds())}`

}

function myFormat(value) {

    return value < 10 ? `0${value}` : value;

}
refreshTimerValue();