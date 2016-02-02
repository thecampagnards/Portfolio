<!---------------------------------------------------->
<!----------DEBUT-DU-JEU-AFFICHAGE-QUESTIONS---------->
<!---------------------------------------------------->

<div id="time_bar">
	<div id="time"></div>
</div>
<div class="container">
	<div id="jeuxQuestions">
		<div><h2>Jeux de questions sélectionnés:</h2></div>
		<div id="jeuxQuestionsList">
			<?php
				echo '<h3>'.utf8_encode ($questions['lun1']).', '.utf8_encode ($questions['lautre1']).' ou les deux ?</h3>';
				echo '<h3>'.utf8_encode ($questions['lun2']).', '.utf8_encode ($questions['lautre2']).' ou les deux ?</h3>';
			?>
		</div>
	</div>
</div>