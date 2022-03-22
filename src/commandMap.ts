//Commands
import Rr from "./commands/rr";
import Stats from "./commands/stats";
import Help from "./commands/help";
import Rps from "./commands/rps";
import Countdown from "./commands/countdown";
import Roll from "./commands/roll";
import Reddit from "./commands/reddit";
import Meme from "./commands/meme";
import Moderation from "./commands/moderation";
import Case from "./commands/case";
import WeatherFile from "./commands/weather";
import Btc from "./commands/btc";
import OSU from "./commands/osu";
import BJ from "./commands/blackjack/blackjack";
import BJhit from "./commands/blackjack/blackjack-hit";
import BJStay from "./commands/blackjack/blackjack-stay";
import Translate from "./commands/translate";


const commandMap = new Map();

commandMap.set("rr", Rr);
commandMap.set("stats", Stats);
commandMap.set("help", Help);
commandMap.set("rps", Rps);
commandMap.set("countdown", Countdown);
commandMap.set("roll", Roll);
commandMap.set("reddit", Reddit);
commandMap.set("meme", Meme);
commandMap.set("moderation", Moderation);
commandMap.set("case", Case);
commandMap.set("weather", WeatherFile);
commandMap.set("btc", Btc);
commandMap.set("osu", OSU);
commandMap.set("blackjack", BJ);
commandMap.set("hit", BJhit);
commandMap.set("stay", BJStay);
commandMap.set("translate", Translate);

export default commandMap;