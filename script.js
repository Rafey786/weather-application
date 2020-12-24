$(document).ready(function() {
    $("#Inputbox").on("keyup", function(e) {
        var cityname = e.target.value;
        const APIKey = "e83883a468e19c2e6df4f14593bf555c";

        // Request to the server
        $.ajax({

            url: `http://api.openweathermap.org/data/2.5/weather?q=${cityname}&appid=${APIKey}&units=metric`,

        }).done(function(weatherdata) {
			
            console.log(weatherdata);

            $("#weatherInfo").html(`
            <div class="container">
            <div class="row">
                <div class="card" style="width: 18rem; background:green; color:white;">
                        <img class="card-img-top" src="http://openweathermap.org/img/wn/${weatherdata.weather[0].icon}@2x.png" alt="Card image cap">
                        <div class="card-body">
                            <h5 class="card-title">Weather: ${weatherdata.weather[0].description}</h5>
                            <p class="card-text">The Temperatur at ${cityname} is = ${weatherdata.main.temp} &#8451; and it feels like it is ${weatherdata.main.feels_like} &#8451;</p>
                            <a href="https://www.google.com/search?q=${cityname}" class="btn btn-danger">Know more about this place</a>
                        </div>
                </div>
            </div>
            </div>`);
        });
    });
});
