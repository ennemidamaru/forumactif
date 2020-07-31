$(function() {
  
   // On lance la fonction sur tout le forum
   $.each($('.bodyline'), function( index, value ) {
     
      // On récupère la couleur du groupe & on la place dans une variable
      var color_gp = $(this).find('.firstword > span').css('color');
      var dom = document.querySelector("div.profil-pseudo strong b");
     
      // Condition basée sur l'existence du contenu de la variable color_gp
      if (typeof(color_gp) != "undefined") {
        
        // On place la couleur du groupe sur les textes
        $(this).find('.seventh-prof-doss-title b, .seventh-prof-bottom-left b, .poster-rango i, .tango n, .seventh-prof-bottom b, .seventh-prof-bio-right h1, .profil-pseudo strong span').css('color', color_gp);
        
        // On place la couleur du groupe sur les backgrounds
        $(this).find('.seventh-prof-doss-2 span.gen, .background-gradiant, div.bouton-indic a').css('background', color_gp);
        
        // On place la couleur du groupe sur le background des scrollbars
        // $(this).find('.profile-corpus-left::-webkit-scrollbar-thumb').css('backgroundColor', color_gp);
        
        //  On place la couleur du groupe sur les backgrounds en linear-gradient      
          dom.style.fontSize = '40px';
	  dom.style.background = 'linear-gradient(to bottom right, rgba(255,255,255,0), rgba(255,255,255,1))';
          dom.style.backgroundClip = 'text';
  	  dom.style.textFillColor = 'transparent';
 	  dom.style.mixBlendMode = 'screen';
        
        // $('div.profil-pseudo strong b').css({
  	//	'background' : '-webkit-linear-gradient(to bottom right, '+color_gp+', #ffffff)',
  	//	'background' : '-moz-linear-gradient(to bottom right, '+color_gp+', #ffffff)',
  	//	'background' : '-o-linear-gradient(to bottom right, '+color_gp+', #ffffff)',
        //	'background' : '-ms-linear-gradient(to bottom right, '+color_gp+', #ffffff)',
  	//	'background' : 'linear-gradient(to bottom right, '+color_gp+', #ffffff)'
	//});
        
        // On place la couleur du groupe sur les bordures
        $(this).find('.postfloater').css('outlineColor', color_gp);
      }
   });  
});