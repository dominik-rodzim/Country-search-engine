var url = 'https://restcountries.eu/rest/v1/name/';
var countriesList = document.getElementById('countries');

document.getElementById('search').addEventListener('click', searchCountries);

function searchCountries() {
    var countryName = document.getElementById('country-name').value;
    if(!countryName.length) countryName = 'Poland';
    fetch(url + countryName)
        .then(function(resp) {
            return resp.json();
        })
        .then(showCountriesList);
}

function showCountriesList(resp) {
  countriesList.innerHTML = '';
	resp.forEach(function(item){
	    var liEl = document.createElement('li');
	    liEl.innerHTML = "<h2>" + item.name + "</h2>";
	    liEl.innerHTML += 
	    "<div class='header'>Background information:</div> <table><tr><td>Region</td><td>" + item.region + "</td></tr><tr><td>Capital</td><td>" + item.capital + "</td></tr><tr><td>Population</td><td>" + item.population + "</td></tr><tr><td>Calling codes</td><td>" + item.callingCodes + "</td></tr></table>";
	    countriesList.appendChild(liEl);
	});
}