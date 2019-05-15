//autoSlider();
let left = 0;

function autoSlider() {
	let timer = setTimeout(function() {
	    let polosa = document.getElementById("polosa");
	    left -= 225;
	    if( left < -675) {
	 	left = 0;
	 	clearTimeout(timer);
	    }

	  polosa.style.left = left + "px";
	  autoSlider();
	}, 3000);

};

menu.onclick = function openMenu() {
	let x = document.getElementById('myTopnav');
	if(x.className ==="navtop") {
		x.className+= " responsive";
	} 
	else{
		x.className = "navtop";
	}
}


$('#slaider').slick({
  dots: true,
  infinite: true,
  speed: 500,
  fade: true,
  cssEase: 'linear'
});