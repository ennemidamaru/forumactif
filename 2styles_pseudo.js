$(function(){
  $(".profil-pseudo strong span strong").each(function() {
    var txt = $(this).text();
    var tab = txt.split(" ");
    var nb  = tab.length;
    var neoTxt = '<b> ' + tab[0] + ' </b>';
    for (var i = 1; i < nb; i++) {
      neoTxt += tab[i] + " ";
    }
    $(this).html(neoTxt);
  });
});