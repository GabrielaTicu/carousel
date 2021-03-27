
    var h = Number(document.getElementById("carousel").getBoundingClientRect().height);
    var w = Number(document.getElementById("carousel").getBoundingClientRect().width);
    console.log(h + ", " + w);
    var buttonTop = "";
    var buttonLeft = "";
    var buttons = document.getElementById("buttons");
    var left = document.getElementById("left");
    var right = document.getElementById("right");
    buttonTop = 0.4*h;
    buttonLeft = 0.23*w;
    buttons.style.top = buttonTop + "px";
    left.style.left = -buttonLeft + "px";
    right.style.left = buttonLeft + "px";


        const slider = document.querySelector(".items");
		const slides = document.querySelectorAll(".item");
		const button = document.querySelectorAll(".button");

		let current = 0;
		let prev = 4;
		let next = 1;

		for (let i = 0; i < button.length; i++) {
			button[i].addEventListener("click", () => i == 0 ? gotoPrev() : gotoNext());
		}

		const gotoPrev = () => current > 0 ? gotoNum(current - 1) : gotoNum(slides.length - 1);

		const gotoNext = () => current < 4 ? gotoNum(current + 1) : gotoNum(0);

		const gotoNum = number => {
			current = number;
			prev = current - 1;
			next = current + 1;

			for (let i = 0; i < slides.length; i++) {
				slides[i].classList.remove("active");
				slides[i].classList.remove("prev");
				slides[i].classList.remove("next");
			}

			if (next == 5) {
				next = 0;
			}

			if (prev == -1) {
				prev = 4;
			}

			slides[current].classList.add("active");
			slides[prev].classList.add("prev");
			slides[next].classList.add("next");
		}