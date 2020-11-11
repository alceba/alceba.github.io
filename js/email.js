


function sendEmailAddress() {
	var data = JSON.stringify({
	  "email": $("#inputEmail").val(),
	});

	var xhr = new XMLHttpRequest();
	xhr.withCredentials = false;

	/*
	xhr.addEventListener("readystatechange", function () {
	  if (this.readyState === 4) {
	    console.log(this.responseText);
	  }
	});
	*/

	xhr.open("POST", "https://alcebanewsletter-c774.restdb.io/rest/emails");
	xhr.setRequestHeader("content-type", "application/json");
	xhr.setRequestHeader("x-apikey", "5fab221c863959728838523a");
	xhr.setRequestHeader("cache-control", "no-cache");

	xhr.send(data);

	$('#alert-email').show();
	return false;
}

