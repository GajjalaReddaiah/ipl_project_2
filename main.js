const fs = require("fs");
const Papa = require("papaparse");
var express=require("express")
var app=express()

app.use(express.json())
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "http://127.0.0.1:5500");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, PATCH, DELETE");
    res.setHeader("Access-Control-Allow-Headers", "X-Requested-With,content-type");
    res.setHeader("Access-Control-Allow-Credentials", true);
    next();
  });
app.get('/',(req,res)=>{
    res.send("welcome ipl project")
})
app.get('/problem/1', (req, res) => {
    res.sendFile(__dirname + "/src/public/output/1-matchesPerYear.json");
});
app.get('/problem/2', (req, res) => {
    res.sendFile(__dirname + "/src/public/output/2-matchesWonPerTeamPerYear.json");
});
app.get('/problem/3', (req, res) => {
    res.sendFile(__dirname + "/src/public/output/3-extraRunsConcededPerTeam.json");
});
app.get('/problem/4', (req, res) => {
    res.sendFile(__dirname + "/src/public/output/4-top10EconomicalBowler.json");
});
app.get('/problem/5', (req, res) => {
    res.sendFile(__dirname + "/src/public/output/5-teamWonTossAndMatchBoth.json");
});
app.get('/problem/6', (req, res) => {
    res.sendFile(__dirname + "/src/public/output/6-highestNumberOfPlayerOfMatch.json");
});
app.get('/problem/7', (req, res) => {
    res.sendFile(__dirname + "/src/public/output/7-strikeRateOfBatsman.json");
});
app.get('/problem/8', (req, res) => {
    res.sendFile(__dirname + "/src/public/output/8-highestNumberTimesBatsmanDismissed.json");
});
app.get('/problem/9', (req, res) => {
    res.sendFile(__dirname + "/src/public/output/9-bowlerBestEconomy.json");
});

const deliveriesCsvData = fs.readFileSync("./src/data/deliveries.csv", "utf-8");
const matchesCsvData = fs.readFileSync("./src/data/matches.csv", "utf-8");

const { data: allDeliveries } = Papa.parse(deliveriesCsvData, {
    header: true,
    skipEmptyLines: true,
});

const { data: allMatches } = Papa.parse(matchesCsvData, {
    header: true,
    skipEmptyLines: true,
});

const match_per_year_for_all_the_years = require("./src/sever/match_per_year_for_all_the_years.js");
const problem1JsonFilePath = "./src/public/output/1-matchesPerYear.json";

const matchesPlayedForYearResult = match_per_year_for_all_the_years(allMatches);

fs.writeFileSync(
    problem1JsonFilePath,
    JSON.stringify(matchesPlayedForYearResult, null, 2)
);
console.log(`MatchesPerYear.json File saved`);

const matchesWonPerTeamPerYear = require("./src/sever/matches_won_per_team_per_year.js");
const problem2JsonFilePath = "./src/public/output/2-matchesWonPerTeamPerYear.json";

const matchesWonPerTeamByYear = matchesWonPerTeamPerYear(allMatches);
fs.writeFileSync(
    problem2JsonFilePath,
    JSON.stringify(matchesWonPerTeamByYear, null, 2)
);
console.log(`totalMatchesWonPerTeamPerYear.json File saved`);

const extraRunsConcededPerTeam = require("./src/sever/extra_runs_conceded_per_team.js");
const problem3JsonFilePath = "./src/public/output/3-extraRunsConcededPerTeam.json";
const extraRunsConcededPerTeamResult = extraRunsConcededPerTeam( allMatches,allDeliveries);

fs.writeFileSync(
    problem3JsonFilePath,
    JSON.stringify(extraRunsConcededPerTeamResult, null, 2)
);
console.log(`extraRunsConcededPerTeam.json File saved`);

const topEconomicalBowler = require("./src/sever/economical_bowlers_in_the_year_2015.js");
const problem4JsonFilePath = "./src/public/output/4-top10EconomicalBowler.json";
const topEconomicalBowlerResult = topEconomicalBowler(allMatches,allDeliveries);

fs.writeFileSync(
    problem4JsonFilePath,
    JSON.stringify(topEconomicalBowlerResult, null, 2)
);
console.log(`top10EconomicalBowler.json File saved`);

const teamWinTossAndWinMatch = require("./src/sever/team_won_the_toss.js");
const problem5JsonFilePath = "./src/public/output/5-teamWonTossAndMatchBoth.json";
const teamWonTossAndWonMatchResult = teamWinTossAndWinMatch(allMatches);

fs.writeFileSync(
    problem5JsonFilePath,
    JSON.stringify(teamWonTossAndWonMatchResult, null, 2)
);
console.log(`teamWonTossAndMatchBoth.json File saved`);

const mostNumberOfPlayerOfMatches = require("./src/sever/Player_of_the_Match_awards.js");
const problem6JsonFilePath = "./src/public/output/6-highestNumberOfPlayerOfMatch.json";
const mostNumberOfPlayerOfMatchesResult = mostNumberOfPlayerOfMatches(allMatches);

fs.writeFileSync(
    problem6JsonFilePath,
    JSON.stringify(mostNumberOfPlayerOfMatchesResult, null, 2)
);
console.log(`highestNumberOfPlayerOfMatch.json File saved`);

const strikeRateOfBatsman = require("./src/sever/strike_rateof_a_batsman.js");
const problem7JsonFilePath = "./src/public/output/7-strikeRateOfBatsman.json";
const strikeRateOfPlayerEachSeason = strikeRateOfBatsman(allMatches,allDeliveries);

fs.writeFileSync(
    problem7JsonFilePath,
    JSON.stringify(strikeRateOfPlayerEachSeason, null, 2)
);
console.log(`strikeRateOfBatsman.json File saved`);

const mostNumberOfTimeBatsmanDissimed = require("./src/sever/dismissed_by_another_player.js");
const problem8JsonFilePath = "./src/public/output/8-highestNumberTimesBatsmanDismissed.json";
const onePlayerDismissedAnotherMaxTime = mostNumberOfTimeBatsmanDissimed(allDeliveries);

fs.writeFileSync(
    problem8JsonFilePath,
    JSON.stringify(onePlayerDismissedAnotherMaxTime, null, 2)
);
console.log(`highestNumberTimesBatsmanDismissed.json File saved`);

const bestBowlerEconomy = require("./src/sever/best_economy_in_super_overs.js");
const problem9JsonFilePath = "./src/public/output/9-bowlerBestEconomy.json";
const bestBowlerEconomyResult = bestBowlerEconomy(allDeliveries, allMatches);

fs.writeFileSync(
    problem9JsonFilePath,
    JSON.stringify(bestBowlerEconomyResult, null, 2)
);
console.log(`bowlerBestEconomy.json File saved`);

app.listen(3000,()=>{
    console.log(" server is runining  http://localhost:3000/");
} )