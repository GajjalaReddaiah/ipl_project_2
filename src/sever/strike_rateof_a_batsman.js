//Find the strike rate of a batsman for each season

// const matches=require("../matches.json")

// const deliveries = require("../deliveries.json");
function strike_rateof_a_batsman(allMatches,allDeliveries){


let obj = {};

for (let data of allMatches) {
    if (!obj[data.season]) {
        obj[data.season] = {};
    }

    for (let runs of allDeliveries) {
        if (!obj[data.season][runs.batsman]) {
            obj[data.season][runs.batsman] = { runs: 0, balls: 0 };
        }

        obj[data.season][runs.batsman].runs += Number(runs.batsman_runs);
        obj[data.season][runs.batsman].balls++;
    }
}

let strikerate = [];
for (let season in obj) {
    for (let batsman in obj[season]) {
        const { runs, balls } = obj[season][batsman];
        const strikeRates = (runs / balls) * 100;
        strikerate.push({ season, batsman,strikeRates });
    }
}
return strikerate
}
module.exports=strike_rateof_a_batsman

