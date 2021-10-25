document.addEventListener('DOMContentLoaded', init, false);

function init() {
	const h2_elems = document.getElementsByTagName("h2");
	const h3_elems = document.getElementsByTagName("h3");
	const rot_elems = document.getElementsByClassName("rot");

	for (const elem of h2_elems) {
		elem.style.transform = "rotate("+(Math.random()-0.5)*6+"deg)";
		elem.addEventListener("mouseover", function() {
			elem.style.transform = "scale(1.1)";
		}, false);

		elem.addEventListener("mouseout", function() {
			elem.style.transform = "rotate("+(Math.random()-0.5)*6+"deg)";
		}, false);
	}

	for (const elem of h3_elems) {
		elem.style.transform = "rotate("+(Math.random()-0.5)*4+"deg)";
		elem.addEventListener("mouseover", function() {
			elem.style.transform = "scale(1.1)";
		}, false);

		elem.addEventListener("mouseout", function() {
			elem.style.transform = "rotate("+(Math.random()-0.5)*6+"deg)";
		}, false);
	}

	for (const elem of rot_elems) {
		elem.style.transform = "rotate("+(Math.random()-0.5)*6+"deg)";
	}
}
