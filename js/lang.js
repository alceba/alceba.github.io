
function loadLanguage(lang) {
	var json = null;
	var xhttp = new XMLHttpRequest();
	xhttp.open("GET", "assets/json/"+lang+".json", false);
	xhttp.setRequestHeader("Content-type", "application/json");
	xhttp.send();
	if (xhttp.readyState === 4 && xhttp.status === 200) {
		json = JSON.parse(xhttp.responseText);
	}
	return json;
}

function updateLanguage(tags) {
	Array.from(tags).forEach(function(key, index){
		var e = $('[data-langkey="'+key+'"]')[0];
		if (e.getAttribute("type") == "email") {
			e.placeholder = data_lang[lang][key];
		} else {
			e.innerHTML = data_lang[lang][key];
		}
	});
}

function changeLanguage(language) {
	lang = language;
	updateLanguage(Object.keys(data_lang[lang]));
}

var data_lang = new Object();
data_lang["en"] = loadLanguage("en");
data_lang["es"] = loadLanguage("es");

var lang = "en";
