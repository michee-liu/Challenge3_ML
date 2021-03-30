//Weather API
function getAPIdata() {
	var url = 'https://api.openweathermap.org/data/2.5/forecast';
	var apiKey ='f31545b9705649d0e5327a3267bd2690';
	var city = 'netherlands';

	var request = url + '?' + 'appid=' + apiKey + '&' + 'q=' + city;

	