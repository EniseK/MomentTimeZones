function displayTime(event) {
	if (event.target.value == "Hannover") {
		alert(
			moment()
				.tz("Europe / Berlin")
				.format("[It is ] dddd, MMMM D , YYYY h:m A [ in Hannover/Germany.]")
		);
	}

	if (event.target.value == "Istanbul") {
		alert(
			moment()
				.tz("Europe / Istanbul")
				.format("[It is ] dddd, MMMM D , YYYY h:m A [ in Istanbul/Turkiye.]")
		);
	}

	if (event.target.value == "Michigan") {
		alert(
			moment()
				.tz("US / Michigan")
				.format("[It is ] dddd, MMMM D , YYYY h:m A [ in Michigan/US.]")
		);
	}
}

let city = document.querySelector("#cityMenu");
city.addEventListener("change", displayTime);
