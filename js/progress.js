window.onload = function onLoad() {
			var hauteur_pour = $('#competences').height()+500;
			
			var element = document.getElementById('progress');
			var val = $('#progress').attr('value');
			element.innerHTML = '<p id="pourcentage" class="pourcentage"></p>';		
			var textElement = document.getElementById('pourcentage');
			
			var element2 = document.getElementById('progress2');
			var val2 = $('#progress2').attr('value');
			element2.innerHTML = '<p id="pourcentage2" class="pourcentage"></p>';		
			var textElement2 = document.getElementById('pourcentage2');
			
			var element3 = document.getElementById('progress3');
			var val3 = $('#progress3').attr('value');
			element3.innerHTML = '<p id="pourcentage3" class="pourcentage"></p>';		
			var textElement3 = document.getElementById('pourcentage3');

			var element4 = document.getElementById('progress4');
			var val4 = $('#progress4').attr('value');
			element4.innerHTML = '<p id="pourcentage4" class="pourcentage"></p>';		
			var textElement4 = document.getElementById('pourcentage4');

			var element5 = document.getElementById('progress5');
			var val5 = $('#progress5').attr('value');
			element5.innerHTML = '<p id="pourcentage5" class="pourcentage"></p>';		
			var textElement5 = document.getElementById('pourcentage5');
			
			var element6 = document.getElementById('progress6');
			var val6 = $('#progress6').attr('value');
			element6.innerHTML = '<p id="pourcentage6" class="pourcentage"></p>';		
			var textElement6 = document.getElementById('pourcentage6');

			var element7 = document.getElementById('progress7');
			var val7 = $('#progress7').attr('value');
			element7.innerHTML = '<p id="pourcentage7" class="pourcentage"></p>';		
			var textElement7 = document.getElementById('pourcentage7');

			var element8 = document.getElementById('progress8');
			var val8 = $('#progress8').attr('value');
			element8.innerHTML = '<p id="pourcentage8" class="pourcentage"></p>';		
			var textElement8 = document.getElementById('pourcentage8');

			var element9 = document.getElementById('progress9');
			var val9 = $('#progress9').attr('value');
			element9.innerHTML = '<p id="pourcentage9" class="pourcentage"></p>';		
			var textElement9 = document.getElementById('pourcentage9');
			
			var element10 = document.getElementById('progress10');
			var val10 = $('#progress10').attr('value');
			element10.innerHTML = '<p id="pourcentage10" class="pourcentage"></p>';		
			var textElement10 = document.getElementById('pourcentage10');
			
			var element11 = document.getElementById('progress11');
			var val11 = $('#progress11').attr('value');
			element11.innerHTML = '<p id="pourcentage11" class="pourcentage"></p>';		
			var textElement11 = document.getElementById('pourcentage11');

            var element12 = document.getElementById('progress12');
			var val12 = $('#progress12').attr('value');
			element12.innerHTML = '<p id="pourcentage12" class="pourcentage"></p>';		
			var textElement12 = document.getElementById('pourcentage12');
			
			var circle = new ProgressBar.Circle(element, {
				color: '#FCB03C',
				strokeWidth: 5,
				trailWidth: 1,
				//duration: 5000,
				easing: 'bounce',
				trailColor: "#ddd"						
			});
		
			var circle2 = new ProgressBar.Circle(element2, {
				color: '#FCB03C',
				strokeWidth: 5,
				trailWidth: 1,
				//duration: 5000,
				easing: 'bounce',
				trailColor: "#ddd"						
			});
		
			var circle3 = new ProgressBar.Circle(element3, {
				color: '#6dc4ea',
				strokeWidth: 5,
				trailWidth: 1,
				//duration: 5000,
				easing: 'bounce',
				trailColor: "#ddd"						
			});

			var circle4 = new ProgressBar.Circle(element4, {
				color: '#FCB03C',
				strokeWidth: 5,
				trailWidth: 1,
				//duration: 5000,
				easing: 'bounce',
				trailColor: "#ddd"						
			});
		
			var circle5 = new ProgressBar.Circle(element5, {
				color: '#6dc4ea',
				strokeWidth: 5,
				trailWidth: 1,
				//duration: 5000,
				easing: 'bounce',
				trailColor: "#ddd"						
			});
		
			var circle6 = new ProgressBar.Circle(element6, {
				color: '#e04242',
				strokeWidth: 5,
				trailWidth: 1,
				//duration: 5000,
				easing: 'bounce',
				trailColor: "#ddd"						
			});
		
			var circle7 = new ProgressBar.Circle(element7, {
				color: '#16c684',
				strokeWidth: 5,
				trailWidth: 1,
				//duration: 5000,
				easing: 'bounce',
				trailColor: "#ddd"						
			});

			var circle8 = new ProgressBar.Circle(element8, {
				color: '#16c684',
				strokeWidth: 5,
				trailWidth: 1,
				//duration: 5000,
				easing: 'bounce',
				trailColor: "#ddd"						
			});

			var circle9 = new ProgressBar.Circle(element9, {
				color: '#16c684',
				strokeWidth: 5,
				trailWidth: 1,
				//duration: 5000,
				easing: 'bounce',
				trailColor: "#ddd"						
			});
			
			var circle10 = new ProgressBar.Circle(element10, {
				color: '#FFF',
				strokeWidth: 5,
				trailWidth: 1,
				//duration: 5000,
				easing: 'bounce',
				trailColor: "#ddd"						
			});
				var circle11 = new ProgressBar.Circle(element11, {
				color: '#FFF',
				strokeWidth: 5,
				trailWidth: 1,
				//duration: 5000,
				easing: 'bounce',
				trailColor: "#ddd"						
			});

	        var circle12 = new ProgressBar.Circle(element12, {
				color: '#16c684',
				strokeWidth: 5,
				trailWidth: 1,
				//duration: 5000,
				easing: 'bounce',
				trailColor: "#ddd"						
			});
			
			var i=0;
			var i2=0;
			var i3=0;
			var i4=0;
			var i5=0;
			var i6=0;
			var i7=0;
			var i8=0;
			var i9=0;
			var i10=0;
			var i11=0;
			var i12=0;

			setInterval(function() {
			if ($(this).scrollTop() > hauteur_pour) {
				textElement.innerHTML = Math.round(i*100)+'%';
				textElement2.innerHTML = Math.round(i2*100)+'%';
				textElement3.innerHTML = Math.round(i3*100)+'%';
				textElement4.innerHTML = Math.round(i4*100)+'%';
				textElement5.innerHTML = Math.round(i5*100)+'%';
				textElement6.innerHTML = Math.round(i6*100)+'%';
				textElement6.innerHTML = Math.round(i6*100)+'%';
				textElement7.innerHTML = Math.round(i7*100)+'%';
				textElement8.innerHTML = Math.round(i8*100)+'%';
				textElement9.innerHTML = Math.round(i9*100)+'%';
				textElement10.innerHTML = Math.round(i10*100)+'%';
				textElement11.innerHTML = Math.round(i11*100)+'%';
				textElement12.innerHTML = Math.round(i12*100)+'%';

				if(i<val){
					i+=0.02;
					circle.animate(i, function() {
					});
				}
				if(i2<val2){
					i2+=0.02;
					circle2.animate(i2, function() {
					});
				}
				if(i3<val3){
					i3+=0.02;
					circle3.animate(i3, function() {
					});
				}
				if(i4<val4){
					i4+=0.02;
					circle4.animate(i4, function() {
					});
				}
				if(i5<val5){
					i5+=0.02;
					circle5.animate(i5, function() {
					});
				}
				if(i6<val6){
					i6+=0.02;
					circle6.animate(i6, function() {
					});
				}
				if(i7<val7){
					i7+=0.02;
					circle7.animate(i7, function() {
					});
				}
				if(i8<val8){
					i8+=0.02;
					circle8.animate(i8, function() {
					});
				}
				if(i9<val9){
					i9+=0.02;
					circle9.animate(i9, function() {
					});
				}
				if(i10<val10){
					i10+=0.02;
					circle10.animate(i10, function() {
					});
				}
				if(i11<val11){
					i11+=0.02;
					circle11.animate(i11, function() {
					});
				}
				if(i12<val12){
					i12+=0.02;
					circle12.animate(i12, function() {
					});
				}
			}
			}, 100);
};