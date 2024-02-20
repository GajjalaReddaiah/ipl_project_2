// //Find the highest number of times one player has been dismissed by another player
//  const allDeliveries =require("/home/reddaiah/ipl_project/deliveries.json")

 function dismissed_by_another_player(allDeliveries){

 

const allDismissal = {};

for (let delivery of allDeliveries) {
    const batsman = delivery.player_dismissed;
    const bowler = delivery.bowler;

    if (batsman.trim() === '') {
    continue;
    }

    if (allDismissal[batsman]) {
    if (allDismissal[batsman][bowler]) {
        allDismissal[batsman][bowler] += 1;
    } else {
        allDismissal[batsman][bowler] = 1;
    }
    } else {
    allDismissal[batsman] = { [bowler]: 1 };
    }
}

let playerDismissedAnotherPlayerMaxTimeData = {
    player_dismissed: null,
    bowler_name: null,
    count: 0,
};

for (const batsman in allDismissal) {
    const bowlerObj = allDismissal[batsman];

    for (const bowler in bowlerObj) {
    const outCount = bowlerObj[bowler];

    if (outCount > playerDismissedAnotherPlayerMaxTimeData.count) {
        playerDismissedAnotherPlayerMaxTimeData = {
        player_dismissed: batsman,
        bowler_name: bowler,
        count: outCount,
        };
    }
    }
}
return playerDismissedAnotherPlayerMaxTimeData
 }
module.exports=dismissed_by_another_player


