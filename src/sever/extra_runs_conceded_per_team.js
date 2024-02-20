

function extra_runs_conceded_per_team(allMatches, allDeliveries){

let obj={}
for(let data of allMatches){
    if(data.season=="2016"){
        for(let runs of allDeliveries){
            if(data.id==runs.match_id && runs.bowling_team){
                if(obj[runs.bowling_team]===undefined){
                    obj[runs.bowling_team]=0
                }else{
                    obj[runs.bowling_team]+=Number(runs.extra_runs)
                }
                
            }
        }
    }

}
return obj
}
module.exports={
    extra_runs_conceded_per_team
 
 }
 module.exports=extra_runs_conceded_per_team;
   
