function showBtn(btn) {
	
	var prevBtn = document.getElementById("recentprojects_prev");
	var nextBtn = document.getElementById("recentprojects_next");

	if (btn == "prev") {
		prevBtn.classList.remove("disabledSliderBtn");
		prevBtn.disabled = false;
	} else {
		nextBtn.classList.remove("disabledSliderBtn");
		nextBtn.disabled = false;
	}
}
function hideBtn(btn) {
	
	var prevBtn = document.getElementById("recentprojects_prev");
	var nextBtn = document.getElementById("recentprojects_next");

	if (btn == "prev") {
		prevBtn.classList.add("disabledSliderBtn");
		prevBtn.disabled = true;
	} else {
		nextBtn.classList.add("disabledSliderBtn");
		nextBtn.disabled = true;
	}
}

function slideRecentProjects(slide_direction) {

	//DIRECTION: 0 is PREV and 1 is NEXT

	var prevBtn = document.getElementById("recentprojects_prev");
	var nextBtn = document.getElementById("recentprojects_next");

	var sliderContainerWidth = document.getElementById("recentProjectsSlider_container").offsetWidth;
	var sliderWidth = document.getElementById("recentProjectsSlider").offsetWidth;
	
	var distanceToSlide = Math.round(sliderContainerWidth / 2);
	if (sliderContainerWidth <= 550) {
		distanceToSlide = 300;
	}

	var currentLeftMargin = document.getElementById("recentProjectsSlider").style.marginLeft.replace('px','');
	var leftLimit =  0;
	var rightLimit = (sliderWidth - 300) * -1;

	var newLeftMargin = 0;

	if (slide_direction == 0) {
		if ((parseInt(currentLeftMargin) + distanceToSlide) < leftLimit) {
			newLeftMargin = parseInt(currentLeftMargin) + distanceToSlide;
			showBtn('prev');
			showBtn('next');
		} else {
			newLeftMargin = leftLimit;
			hideBtn('prev');
			showBtn('next');
		}
	}
	else {
		if ((parseInt(currentLeftMargin) - distanceToSlide) > rightLimit) {
			newLeftMargin = parseInt(currentLeftMargin) - distanceToSlide;
			showBtn('prev');
			showBtn('next');
		} else {
			newLeftMargin = rightLimit;
			showBtn('prev');
			hideBtn('next');
		}
	}

	// if (currentLeftMargin == 0) {
	// 	alert("0 next time");
	// }

	document.getElementById("recentProjectsSlider").style.marginLeft = newLeftMargin+"px";
}