document.addEventListener("DOMContentLoaded", function (event) {

	function animate() {
		var wintop = window.pageYOffset;

		var jsAnimate = document.querySelectorAll(".js-animate");

		[].forEach.call(jsAnimate, function (elem, i) {
			if (wintop > wintop + elem.getBoundingClientRect().top - (window.innerHeight / 1.15)) {//1.5 Looks Good too
				elem.classList.add("animated");
			}
		})
	}

	window.onscroll = function () {
		animate();
		var header = document.getElementById("header");
		if (window.scrollY > 0) {
			header.classList.add("scroll");
		} else {
			header.classList.remove("scroll");
		}
	};

	var tabNav = document.querySelectorAll(".tabs_nav .platform_item");
	[].forEach.call(tabNav, function (elem) {
		elem.addEventListener('click', function () {
			var index = [].slice.call(elem.parentNode.children).indexOf(elem),
				allContent = document.querySelectorAll(".tabs_content .tabs_content_item"),
				current = allContent[index];
			allContent.forEach(function (elem, i) {
				if (i !== index) {
					elem.style.display = 'none';
				}
			})
			current.style.display = 'block';
		}, false);
	});
	
	animate();
	
}, false);

var isLoaded = false;
(function(){
	var modal = $("#myModal");
	var btn = $(".myBtn");

	btn.each(function(){
		$(this).on('click', function(){
			if(!isLoaded) {
				$("#form").load("https://landing.mailerlite.com/webforms/landing/o0e5j8");
				isLoaded = true;
			}
			modal.show();
		});
	});

	$("#form").on("click", "div.overlay", function(event){
		var divOverlay = $(".overlay")[0];
		if (event.target == divOverlay) {
			modal.hide();
		}
	})
	
}());