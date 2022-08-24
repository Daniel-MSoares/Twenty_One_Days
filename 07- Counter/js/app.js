const counterEl = document.getElementById('counter');
const btnUp = document.getElementById('up');
const btnDown = document.getElementById('down');
const displayEl= document.getElementById('display-area');
const counterTools=Array.from(document.getElementsByClassName('tool'))


function showDisplay(tool){
    let tools =tool
    counterTools.forEach(e=> {
        if(e.id === tools){
            e.classList.remove('invisible')
        }else{
            e.classList.add('invisible')
        }
    });
}


class Counter{
  //refatorar assim que terminar

    incrementCounter(){
        let Value=parseInt(counterEl.innerText)+1
        if (Value < 10 && Value >= 0){
            Value=`000${Value}`
        }else if(Value >= 10 & Value < 100 ){
            Value=`00${Value}`
        }else if(Value >= 100 & Value < 1000 ){
            Value=`0${Value}`
        }
        counterEl.innerText = Value
    }
    decrementCounter(){
        let Value=parseFloat(counterEl.innerText)-1
        if( Value < 0){
            Value=Value
        }else if (Value < 10){
                Value=`000${Value}`
        }else if(Value >= 10 & Value < 100 ){
            Value=`00${Value}`
        }else if(Value >= 100 & Value < 1000 ){
            Value=`0${Value}`
        }
        counterEl.innerText = Value
    }
}
class Timer{
    constructor(isRunning){
        this.isRunning = false;
    }
    start(){
        this.isRunning = true;
        let second=document.getElementById('second')
        let minute=document.getElementById('minute')
        let hour=document.getElementById('hour')
        let currentSecond=parseFloat(second.innerText)
        let currentMinute=parseFloat(minute.innerText)
        let currentHour=parseFloat(hour.innerText)
        
       if (this.isRunning){ 
        second.innerText=currentSecond+1
        if(currentSecond <9){
            second.innerText=`0${currentSecond+1}`
        }
        
        if(currentSecond == 59){
        second.innerText = "00"
        currentMinute++
        minute.innerText=currentMinute
        if(currentMinute < 9){
            minute.innerText=`0${currentMinute}`
        }
        
        }
        if(currentMinute == 59){
            minute.innerText = "00"
            currentHour++
            hour.innerText=currentHour
            if(currentHour <9){
                hour.innerText=`0${currentHour}`
            }
            
        }
      }
        
    }

    stop(){
        this.isRunning = false;
        clearInterval(timerStart)
    }

    reset(){
        this.isRunning = false;
        document.getElementById('second').innerText="00"
        document.getElementById('minute').innerText="00"
        document.getElementById('hour').innerText="00"
    }
}

class Scoreboard{
    //refatorar assim que terminar
      
      incrementPlayer1(){
        let score1=document.getElementById('player1Score')
          let Value=parseInt(score1.innerText)+1
          if (Value < 10){
              Value=`0${Value}`
          }
          score1.innerText = Value
      }
      incrementPlayer2(){
        let score2=document.getElementById('player2Score')
          let Value=parseInt(score2.innerText)+1
          if (Value < 10){
              Value=`0${Value}`
          }
          score2.innerText = Value
      }
      reset(){
        document.getElementById('p1').value=''
        document.getElementById('p2').value=''
        document.getElementById('player1Score').innerText='00'
        document.getElementById('player2Score').innerText='00'

      }
  }








const counter=new Counter()
const scoreboard=new Scoreboard()
const timer = new Timer()

let timerStart
function startTimer(){
    timerStart=setInterval(timer.start,1000)
}
function stopTimer(){
    timer.stop()
}
function resetTimer(){
    timer.reset()
}