'use strict';

import {timerValueElem , timerResetElem, timerStartElem , timerStopElem} from '../model/controls.js'


const date = new Date();
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

timerResetElem.onclick = resetTimerValue;
timerResetElem.click();



function resetTimerValue() {

    date.setHours(0,0,0,0);
    refreshTimerValue();

}

function incrementDateSecond() {

    date.setSeconds(date.getSeconds() + 1);
    refreshTimerValue();

}

function refreshTimerValue() {
    timerValueElem.innerText = `${myFormat(date.getMinutes())}:${myFormat(date.getSeconds())}`

}

function myFormat(value) {

    return value < 10 ? `0${value}` : value;

}
