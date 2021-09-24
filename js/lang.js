
function changeLanguage(language) {
	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function(){
	    if (this.readyState === 4 && this.status === 200) {
		langDocument = JSON.parse(this.responseText);

		var tags = document.querySelectorAll('a,p,button,input,h2,h4');
		Array.from(tags).forEach(function(value, index){
	       		var key = value.dataset.langkey;
			if(langDocument[key]) {
				if (value.getAttribute("type") == "email") {
					value.placeholder = langDocument[key];
				} else {
					value.innerHTML = langDocument[key];
				}
			}
		});
	    }
	};
	xhttp.open("GET", "assets/json/" + language + ".json", true);
	xhttp.setRequestHeader("Content-type", "application/json");
	xhttp.send();
}

