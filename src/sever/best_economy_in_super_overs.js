//Find the bowler with the best economy in super overs

//const deliveries=require("/home/reddaiah/ipl_project/deliveries.json")
function best_economy_in_super_overs(allDeliveries){


let economyRate={}
for(let economy of allDeliveries){
    const bowler=economy.bowler
    const superover=economy["is_super_over"]
    if (superover =="1") {
        if (!economyRate[bowler]) {
            economyRate[bowler] = { runs: 0, balls: 0 };
        }

        economyRate[bowler].runs += Number(economy.total_runs) - Number(economy.bye_runs) - Number(economy.legbye_runs) - Number(economy.extra_runs);
        economyRate[bowler].balls += 1;
    }
}
let economyRates = [];
for (let bowler in economyRate) {
  const { runs, balls } = economyRate[bowler];
  const economyRatess = (runs / balls) * 6;
  economyRates.push({ bowler, economyRatess });
}
let orderingbowing=economyRates.sort((a,b)=>a.economyRatess-b.economyRatess)
let topteneconomy=orderingbowing.slice(0,1)

return topteneconomy
}

module.exports=best_economy_in_super_overs

