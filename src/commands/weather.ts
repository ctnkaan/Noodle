import { MessageType } from "../types/message";

var weather = require("openweather-apis");

export = {
  name: "weather",
  description: "display weather im given city",
  execute(msg: MessageType, args: string) {
    weather.setLang("en");
    weather.setCity(args);

    weather.setUnits("metric");

    weather.setAPPID(process.env.OPENWEATHERAPI_KEY);

    weather.getAllWeather(function (err: any, JSONObj: any) {
      console.log(JSONObj);

      if (err) {
        msg.channel.send("Unknown city");
      } else {
        msg.channel.send(
          "The weather in " +
            args +
            " is " +
            JSONObj.main.temp +
            " with " +
            JSONObj.weather[0].description
        );
      }
    });
  },
};
