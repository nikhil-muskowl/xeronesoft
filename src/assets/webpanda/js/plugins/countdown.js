var targetDate=new Date("2016/12/25 00:00:00");var days;var hrs;var min;var sec;function timeToLaunch(){var currentDate=new Date();var diff=(currentDate-targetDate)/1000;var diff=Math.abs(Math.floor(diff));days=Math.floor(diff/(24*60*60));sec=diff-days*24*60*60;hrs=Math.floor(sec/(60*60));sec=sec-hrs*60*60;min=Math.floor(sec/(60));sec=sec-min*60;}
function countDownTimer(){timeToLaunch();$("#days .number").text(days);$("#hours .number").text(hrs);$("#minutes .number").text(min);$("#seconds .number").text(sec);setTimeout(countDownTimer,1000);}
function numberTransition(id,endPoint,transitionDuration,transitionEase){$({numberCount:$(id).text()}).animate({numberCount:endPoint},{duration:transitionDuration,easing:transitionEase,step:function(){$(id).text(Math.floor(this.numberCount));},complete:function(){$(id).text(this.numberCount);}});};