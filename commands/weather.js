
var weather = require('openweather-apis');

module.exports = {
    name: 'weather',
    description: 'display weather im given city',
    execute(msg, args) {

        weather.setLang('en');
        weather.setCity(args);

        weather.setUnits('metric');

        weather.setAPPID(process.env.OPENWEATHERAPI_KEY);

        weather.getAllWeather(function(err, JSONObj){
            console.log(JSONObj);
            msg.channel.send("The weather in izmir is "+JSONObj.main.temp+" with "+JSONObj.weather[0].description);
        });

    },
};