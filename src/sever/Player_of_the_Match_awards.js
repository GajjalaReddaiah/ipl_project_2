//Find a player who has won the highest number of Player of the Match awards for each season



function Player_of_the_Match_awards(allMatches){


let obj={}
for(let data of allMatches){
    if(!obj[data.season]){
        obj[data.season]={}
    }if(!obj[data.season][data.player_of_match]){
        obj[data.season][data.player_of_match]=1
    }else{
        obj[data.season][data.player_of_match]=(obj[data.season][data.player_of_match]||0)+1
    }
        
    }
    let highestPlayers = [];

    for (let season in obj) {
        let maxAwards = 0;
        let highestPlayer = null;
    
        for (let player in obj[season]) {
            if (obj[season][player] > maxAwards) {
                maxAwards = obj[season][player];
                highestPlayer = player;
            }
        }
    
        highestPlayers.push({ season: season, highestPlayer: highestPlayer, totalAwards: maxAwards });
    }
    return highestPlayers
    
}
module.exports=Player_of_the_Match_awards