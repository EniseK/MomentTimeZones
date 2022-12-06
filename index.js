function displayTime(event) {
	if (event.target.value == "Hannover") {
		alert(
			moment()
				.tz("Europe/Berlin")
				.format("[It is ] dddd, MMMM D , YYYY h:m A [ in Hannover/Germany.]")
		);
	}

	if (event.target.value == "Istanbul") {
		alert(
			moment()
				.tz("Asia/Istanbul")
				.format("[It is ] dddd, MMMM D , YYYY h:m A [ in Istanbul/Turkiye.]")
		);
	}

	if (event.target.value == "Detroit") {
		alert(
			moment()
				.tz("America/Detroit")
				.format("[It is ] dddd, MMMM D , YYYY h:m A [ in Detroit/Michigan.]")
		);
	}
}

let city = document.querySelector("#cityMenu");
city.addEventListener("change", displayTime);
