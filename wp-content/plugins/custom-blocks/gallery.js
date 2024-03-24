document.addEventListener("DOMContentLoaded", function () {
	const galleryGrid = document.querySelector(".gallery-grid");
	const items = galleryGrid.querySelectorAll(".galery-item");
	const leftArrow = document.querySelector(".arrow-left");
	const rightArrow = document.querySelector(".arrow-right");
	const galleryModal = document.querySelector(".gallery-modal");
	let currentTranslateX = 0;
	const maxTranslateX = 400 * (items.length - 2);

	leftArrow.addEventListener("click", function () {
		if (currentTranslateX < 0) {
			currentTranslateX += 400;
			applyTranslation();
		}
	});

	rightArrow.addEventListener("click", function () {
		if (Math.abs(currentTranslateX) < maxTranslateX - 400) {
			currentTranslateX -= 400;
			applyTranslation();
		}
	});

	function applyTranslation() {
		galleryGrid.style.transform = `translateX(${currentTranslateX}px)`;
	}

	items.forEach((item) => {
		const image = item.querySelector("img");
		if (!image) return;
		image.addEventListener("click", function () {
			if (!galleryModal) return;
			const modalImage = galleryModal.querySelector("img");
			if (!modalImage) return;
			modalImage.src = this.src;
			galleryModal.classList.add("open");
		});
	});

	galleryModal.addEventListener("click", function () {
		galleryModal.classList.remove("open");
	});
});
