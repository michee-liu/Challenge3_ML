//Weather API
function getAPIdata() {
	var url = 'https://api.openweathermap.org/data/2.5/forecast';
	var apiKey ='f31545b9705649d0e5327a3267bd2690';
	var city = 'netherlands';

	var request = url + '?' + 'appid=' + apiKey + '&' + 'q=' + city;

	//weer aanvragen
	fetch(request)

	.then(function(response) {
		if(!response.ok) throw Error(response.statusText);
		return response.json();
	})

	.then(function(response) {
		console.log(response);
		onAPISucces(response);
	})
	
	.catch(function (error) {
		console.error('Request failed', error);
	});
}

//weer response; inhoud
function onAPISucces(response) {

	var weatherList = response.list;
	var weatherBox = document.getElementById('weather');

	for(var i=0; i< weatherList.length; i++){

		var dateTime = new Date(weatherList[i].dt_txt);
		var date = formDate(dateTime);
		var time = formTime(dateTime);
		var temp = Math.floor(weatherList[i].main.temp - 273.15);
		var iconUrl = 'http://openweathermap.org/img/w/'+weatherList[i].weather[0].icon+'.png';

		//informatie per dag (datum, tijd, temperatuur en icon)
		forecastMessage =  '<div class="forecastMoment">';
		forecastMessage +=   '<div class="date"> '+date+' </div>';
		forecastMessage +=	 '<div class="time"> '+ time +' </div>';
		forecastMessage +=	 '<div class="temp"> '+temp+'&#176;C </div>';
		forecastMessage +=	 '<div class="icon"> <img src="'+iconUrl+'"> </div>';
		forecastMessage += '</div>';

		weatherBox.innerHTML += forecastMessage;
	}
}