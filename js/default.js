var separate_time = function(time){
  var sec = Math.floor((time / 1000)%60);
  var min = time.getMinutes((time / 1000 / 60)%60);
  var hours = time.getHours((time / 1000 / 60 / 60)%24);
  var days = time.getDate(time / 1000 / 60 / 60 / 24);
  return [sec,min,hours,days];
}

var now = new Date();
var target = new Date(2016,8,5,0,0,0,0);
var diff = target.getTime() - now.getTime();
var counter = separate_time(now);
document.getElementById('countdown').textContent = 
'リオオリンピックまであと' + 
counter[3] + '日' +
counter[2] + '時' + 
counter[1] + '分' +
counter[0] + '秒';
