$(document).ready(function(){
var timedrop = 2000;
var idMenu = table= $this.parents("ul").attr("menu");;
var classHover = 'hover';
var texteSub = "Affiche le sous-menu";
var arrowfff = "<span>▼</span>";

if((idMenu)) {
	// Ajoute la class .drop lorsque le JS est activé
	$(idMenu).addClass('drop'); 
	// Ajoute un span (fleche) lorsqu'il y a un sous menu et change le lien
	$("li.sub > a",idMenu).text(function () {
		$(this).replaceWith('<a href="" title="	' + '"><span>' + $(this).text() + '</span> '+arrowfff+'</a> '); 
	});
	// On parcours les liens du menu
	$('li a',idMenu).each(function () {
		// 
		var menuParent = $(this).closest('ul').parent();
		// le cursor est sur l'élément
		$(this).bind("mouseenter focus", function () {
			$(this).addClass( classHover );
			$(menuParent).addClass( classHover );
			// le cursor n'est plus sur l'élément
			}).bind("mouseleave blur", function () {
			$(this).removeClass( classHover );
			//
			if (!$('.'+classHover, menuParent).length) {
				// Retardement pour que le sous-menu disparaisse > 2000 = 2sec
				setTimeout(function(){
					$(menuParent).removeClass( classHover );
				},timedrop);
			}
		});
	});//end
}

});
});