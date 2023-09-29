const questions = document.querySelectorAll(".faq-list__item");

questions.forEach((question) => {
	const term = question.querySelector(".faq-list__term");
	const description = question.querySelector(".faq-list__desc");

	question.addEventListener("click", function (event) {
		this.classList.toggle("faq-list__item--active");

		if (question.classList.contains("faq-list__item--active")) {
			const padding = 16;
			description.style.height = description.scrollHeight + padding + "px";
		} else {
			description.style.height = "0";
		}
	})
})
