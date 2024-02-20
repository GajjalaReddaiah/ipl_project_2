

//const deliveries = require("../deliveries.json");
function economical_bowlers_in_the_year_2015(allMatches,allDeliveries){

let obj={}
for(let data of allMatches){
    if(data.season=="2015"){
        for(let runs of allDeliveries){
            if(data.id==runs.match_id && runs.bowling_team){
                if(obj[runs.bowler]===undefined ){
                    obj[runs.bowler]={runses:0,balls:0}
                }else{
                    obj[runs.bowler].runses+=Number(runs.total_runs)
                    obj[runs.bowler].balls++

                }
                
            }
        }
    }

}
let economyRates = [];
for (let bowler in obj) {
  const { runses, balls } = obj[bowler];
  const economyRate = (runses / balls) * 6;
  economyRates.push({ bowler, economyRate });
}
let orderingbowing=economyRates.sort((a,b)=>a.economyRate-b.economyRate)
let topteneconomy=orderingbowing.slice(1,11)
 return topteneconomy
}

module.exports=economical_bowlers_in_the_year_2015
 
 