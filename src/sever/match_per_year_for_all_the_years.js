
function  match_per_year_for_all_the_years(allMatches){

let obj={}
for(let data1 of allMatches){
    if(!obj[data1.season]){
        obj[data1.season]=1
    }else{
        obj[data1.season]=(obj[data1.season]||0)+1
    }

}
   
return obj

}
module.exports=match_per_year_for_all_the_years