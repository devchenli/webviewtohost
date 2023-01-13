function geocodeAddress() {

	var address = {
		street: document.getElementById("street").value,
		state: document.getElementById("state").value,
		country: document.getElementById("country").value
	};

	if (window.NativeJavascriptInterface) {
		// Call Android interface

		window.NativeJavascriptInterface.postMessage(JSON.stringify(
			address)); //JSONObject: {"street":"","state":"","country":""}
		//NativeJavascriptInterface.postMessage(JSON.stringify(address)); //JSONObject: {"street":"","state":"","country":""}

	} else if (window.webkit && window.webkit.messageHandlers) {

		// Call iOS interface

		try {
			webkit.messageHandlers.NativeJavascriptInterface.postMessage(address);
			document.querySelector('h1').style.color = "green";
		} catch (err) {
			document.querySelector('h1').style.color = "red";
		}


	} else {
		// No Android or iOS interface found
		console.log("No native APIs found.");
	}
}

function changeBackgroundColor(colorText) {
	document.body.style.background = colorText;
}

//<!-- Getting value from iOS OR Android -->
function setLatLon(lat, lon) {
	document.getElementById("latitude").value = lat;
	document.getElementById("longitude").value = lon;
}

function showVersion() {
	if (window.NativeJavascriptInterface) {
		// Call Android interface
		window.NativeJavascriptInterface.showAndroidVersion("1.1.0");
	}
}

function registration() {
 	var data = {
 		user: "user_a",
 		id: "0"
 	};
	if (window.NativeJavascriptInterface) {
		// Call Android interface
		window.NativeJavascriptInterface.adj_complete_registration(JSON.stringify(data));
	}
}

function purchase() {
 	var data = {
 		user: "user_a",
 		id: "0"
 	};
	if (window.NativeJavascriptInterface) {
		// Call Android interface
		window.NativeJavascriptInterface.adj_purchase1(JSON.stringify(data),2.0);
	}
}