$(function(){
    $.get('/privmsg?folder=inbox' , function(data){
      var mp= $(data).find('img[alt="Message Non-lu"]').length;
      if(mp > 1)
      {
        $('a[id="nav-mp"]').addClass('nav-mp').text('('+mp+') messages non lus');
       } else if (mp == 1) {
        $('a[id="nav-mp"]').addClass('nav-mp').text('('+mp+') message non lu');
      
    }})
;});