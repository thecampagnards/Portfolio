function commenter()
	{
	var commentaire = document.getElementById("commentaire");
	commentaire.value = "";
	commentaire.style.color = "black";
	}
	
function soumission()
	{
	var compteur = 0;
	var temp;

	var elms = document.forms[0];

	for(i=0; i<elms.length-2; i++)
		{
		var elm = elms[i];
		var value = elm.value;
		
		if(value=="")
			{
			elm.style.borderColor = "red";
			elm.style.WebkitBoxShadow = 'inset 0 0 5px #999999';
			compteur++;
			}
		else
			{
			elm.style.borderColor = "green";
			elm.style.WebkitBoxShadow = 'inset 0 0 5px #008000';
			}
		}
	if(compteur == 0)
		{
		setTimeout(window.document.location.href='index.html', 1000);
		return true;
		}
	return false;
	}

function Valider(formulaire)
	{
	if(formulaire.coche.checked == true)
		{
		formulaire.valider.disabled = false; 
		}
	if(formulaire.regagree.checked == false)
		{
		formulaire.validation.disabled = true;
		}
	}
