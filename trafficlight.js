const red=document.getElementById('red');
const yellow=document.getElementById('yellow');
const green=document.getElementById('green');
const countdown=document.getElementById('counter');

timer=15;

status='stop';
setInterval(startTraffic, 1000);

setLight();

function startTraffic(){
    countdown.innerHTML=timer;
    if(countdown.innerHTML<10){
        countdown.innerHTML=`0${timer}`

    }

    if(timer==0 && status=='go'){
        setStop()
        status='stop';
    }
    else if(timer==0 && status=='stop'){
        setGo()
        status='go';
    }
    else if(timer > 0 && timer <= 5 && status=='stop'){
        setReady();
    }
    restartTimer();
    timer--;
}

function restartTimer(){
    if(timer==0){
        timer=15
    }
}
function setLight(){
    if(status=='go')setGo();
    if(status=='stop')setStop();
    if(status=='ready')setReady();
}
function setGo(){
    red.style.backgroundColor='transparent';
    red.style.backgroundColor='2px 2px 20px white';
    yellow.style.backgroundColor='transparent';
    yellow.style.boxShadow='2px 2px 20px white';
    green.style.backgroundColor='green';
    green.style.boxShadow='2px 2px 20px green'
}
function setStop(){
    red.style.backgroundColor='red';
    red.style.boxShadow='2px 2px 20px red'
    yellow.style.backgroundColor='transparent';
    yellow.style.boxShadow='2px 2px 20px white'
    green.style.backgroundColor='transparent';
    green.style.boxShadow='2px 2px 20px white'
}
function setReady(){
    red.style.backgroundColor='transparent';
    red.style.boxShadow='2px 2px 20px white'
    yellow.style.backgroundColor='yellow';
    yellow.style.boxShadow='2px 2px 20px yellow';
    green.style.backgroundColor='transparent';
    green.style.boxShadow='2px 2px 20px white'
}

