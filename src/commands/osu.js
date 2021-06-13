const osu = require('node-osu');

const osuApi = new osu.Api(process.env.OSU_KEY, {
	// baseUrl: sets the base api url (default: https://osu.ppy.sh/api)
	notFoundAsError: true, // Throw an error on not found instead of returning nothing. (default: true)
	completeScores: false, // When fetching scores also fetch the beatmap they are for (Allows getting accuracy) (default: false)
	parseNumeric: false // Parse numeric values into numbers/floats, excluding ids
});

module.exports = {
    name: 'osu',
    description: 'Osu api',
    execute(msg, args) {
        osuApi.getUser({ u: args }).then(user => {
            msg.channel.send(">>> ```Username: " + user.name+"\nCountry: " + user.country + "\nAccuaracy: " + (parseFloat(user.accuracy)).toFixed(2) + "\nPP: "+parseInt(user.pp.raw) +"\nRank: "+ user.pp.rank + "\nCountry Rank: " + user.pp.countryRank + "\nPlaytime: "+ ( parseInt(user.secondsPlayed) / 3600 ).toFixed(2) + " hours" + "```" + "\nProfile: https://osu.ppy.sh/users/" + user.id);
            console.log(user);
        });
        
    },
};