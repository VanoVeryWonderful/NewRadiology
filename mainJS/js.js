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