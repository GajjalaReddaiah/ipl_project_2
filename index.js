
function problem1(){

fetch('http://localhost:3000/problem/1')
.then(response => {
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      return response.json();
    })
    .then(data => {
      const processedData = data;
      console.log(processedData);
      Highcharts.chart('chartContainer', {
          chart: {
              type: 'bar'
          },
          title: {
              text: 'Matches Per Year'
          },
          xAxis: {
          
              categories:Object.entries(processedData).map(([keys,value]) => keys),
              title: {
                  text: 'Years'
                 
              }
          },
          yAxis: {
              title: {
                  text: 'Total matches'
              }
          },
          series: [{
              name:"",
              data:Object.entries(processedData).map(([keys,value]) => value),

          }]
      });
    })
    .catch(error => console.error('Error fetching data:', error));
}
problem1()

function problem2() {
    fetch('http://localhost:3000/problem/2')
        .then(response => {
            if (!response.ok) {
                throw new Error('Failed to fetch data');
            }
            return response.json();
        })
        .then(data => {
            console.log(data);
            const years = Object.keys(data);

            // Extract team names from the first year (assuming team names remain consistent across years)
            const teamNames = Object.keys(data[years[0]]);

            // Prepare series data for Highcharts
            const seriesData = teamNames.map(teamName => ({
                name: teamName,
                data: years.map(year => data[year][teamName] || 0) // Use 0 if the team didn't play in a year
            }));

          
            Highcharts.chart('chartContainer1', {
                chart: {
                    type: 'column' 
                },
                title: {
                    text: 'Matches Won by Teams Over the Years' 
                },
                xAxis: {
                    title: {
                        text: 'Years' 
                    },
                    categories: years 
                },
                yAxis: {
                    title: {
                        text: 'Number of Matches Won' 
                    }
                },
                series: seriesData 
            });
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
}

problem2();

function problem3(){

    fetch('http://localhost:3000/problem/3')
    .then(response => {
          if (!response.ok) {
            throw new Error('Failed to fetch data');
          }
          return response.json();
        })
        .then(data => {
          const processedData = data;
          console.log(processedData);
          Highcharts.chart('chartContainer2', {
              chart: {
                  type: 'bar'
              },
              title: {
                  text: 'Extra Runs total Years'
              },
              xAxis: {
              
                  categories:Object.entries(processedData).map(([keys,value]) => keys),
                  title: {
                      text: 'Teams'
                     
                  }
              },
              yAxis: {
                  title: {
                      text: 'Total Extra Runs'
                  }
              },
              series: [{
                  name:"",
                  data:Object.entries(processedData).map(([keys,value]) => value),
    
              }]
          });
        })
        .catch(error => console.error('Error fetching data:', error));
    }
    problem3()


    function problem4(){

        fetch('http://localhost:3000/problem/4')
        .then(response => {
              if (!response.ok) {
                throw new Error('Failed to fetch data');
              }
              return response.json();
            })
            .then(data => {
              const processedData = data;
              console.log(processedData);
              Highcharts.chart('chartContainer3', {
                  chart: {
                      type: 'bar'
                  },
                  title: {
                      text: 'Top10EconomicalBowler'
                  },
                  xAxis: {
                  
                      categories:processedData.map((items) => items.bowler),
                      title: {
                          text: 'Bowers'
                         
                      }
                  },
                  yAxis: {
                      title: {
                          text: 'Economic'
                      }
                  },
                  series: [{
                      name:"",
                      data:processedData.map((items) => items.economyRate),
        
                  }]
              });
            })
            .catch(error => console.error('Error fetching data:', error));
        }
        problem4()
        function problem5() {
            fetch('http://localhost:3000/problem/5')
                .then(response => {
                    if (!response.ok) {
                        throw new Error('Failed to fetch data');
                    }
                    return response.json();
                })
                .then(data => {
                    console.log(data);
                    const years = Object.keys(data);
        
                    // Extract team names from the first year (assuming team names remain consistent across years)
                    const teamNames = Object.keys(data[years[0]]);
        
                    // Prepare series data for Highcharts
                    const seriesData = teamNames.map(teamName => ({
                        name: teamName,
                        data: years.map(year => data[year][teamName] || 0) // Use 0 if the team didn't play in a year
                    }));
        
                  
                    Highcharts.chart('chartContainer4', {
                        chart: {
                            type: 'column' 
                        },
                        title: {
                            text: 'TeamWonToss And MatchWin' 
                        },
                        xAxis: {
                            title: {
                                text: 'Team' 
                            },
                            categories: years 
                        },
                        yAxis: {
                            title: {
                                text: 'Number of Matches Won' 
                            }
                        },
                        series: seriesData 
                    });
                })
                .catch(error => {
                    console.error('Error fetching data:', error);
                });
        }
        
        problem5();

       
        function problem6() {
            fetch('http://localhost:3000/problem/6')
                .then(response => {
                    if (!response.ok) {
                        throw new Error('Failed to fetch data');
                    }
                    return response.json();
                })
                .then(data => {
                    // Extract seasons, highest players, and total awards from data
                    var seasons = data.map(function(item) {
                        return item.season;
                    });
                    var highestPlayers = data.map(function(item) {
                        return item.highestPlayer;
                    });
                    var totalAwards = data.map(function(item) {
                        return item.totalAwards;
                    });
        
                    // Create an array of objects containing both highest player and total awards
                    var seriesData = seasons.map((season, index) => ({
                        name: highestPlayers[index],
                        y: totalAwards[index]
                    }));
        
                    Highcharts.chart('chartContainer5', {
                        chart: {
                            type: 'bar'
                        },
                        title: {
                            text: 'Highest Number Of Player Of The Match'
                        },
                        xAxis: {
                            categories: seasons,
                            title: {
                                text: 'Seasons'
                            }
                        },
                        yAxis: {
                            title: {
                                text: 'Awards'
                            }
                        },
                        series: [{
                            name: 'Highest Player & Awards',
                            data: seriesData
                        }]
                    });
                })
                .catch(error => console.error('Error fetching data:', error));
        }
        
        problem6();


        
        function problem7() {
            fetch('http://localhost:3000/problem/7')
                .then(response => {
                    if (!response.ok) {
                        throw new Error('Failed to fetch data');
                    }
                    return response.json();
                })
                .then(data => {
                    var seasons = data.map(function(item) {
                                        return item.season;
                    });
                    var batsman = data.map(function(item) {
                                        return item.batsman;
                    });
                    var strikeRates= data.map(function(item) {
                                        return item.strikeRates;
                    });
                        
                                    // Create an array of objects containing both highest player and total awards
                    var seriesData = seasons.map((season, index) => ({
                            name: batsman[index],
                            y: strikeRates[index]
                    }));
        
                  
                    Highcharts.chart('chartContainer6', {
                        chart: {
                            type: 'line'
                        },
                        title: {
                            text: 'strikeRateOfBatsman' 
                        },
                        xAxis: {
                            title: {
                                text: 'Years' 
                            },
                            categories: seasons 
                        },
                        yAxis: {
                            title: {
                                text: 'Strike Rate' 
                            }
                        },
                        series: seriesData 
                    });
                })
                .catch(error => {
                    console.error('Error fetching data:', error);
                });
        }
        
        problem7();



  
        function problem8() {
            fetch('http://localhost:3000/problem/8')
                .then(response => {
                    if (!response.ok) {
                        throw new Error('Failed to fetch data');
                    }
                    return response.json();
                })
                .then(data => {
                    // Extract seasons, highest players, and total awards from data
                    Highcharts.chart('chartContainer7', {
                        chart: {
                            type: 'column'
                        },
                        title: {
                            text: 'Dismissals of ' + data.player_dismissed + ' by ' + data.bowler_name
                        },
                        xAxis: {
                            categories: ['Dismissals']
                        },
                        yAxis: {
                            title: {
                                text: 'Count'
                            }
                        },
                        series: [{
                            name: 'Dismissal Count',
                            data: [data.count]
                        }]
                    });
                });
            }
                problem8()

                function problem9() {
                    fetch('http://localhost:3000/problem/9')
                        .then(response => {
                            if (!response.ok) {
                                throw new Error('Failed to fetch data');
                            }
                            return response.json();
                        })
                        .then(data => {
                            // Extract seasons, highest players, and total awards from data
                            Highcharts.chart('chartContainer8', {
                                chart: {
                                    type: 'column'
                                },
                                title: {
                                    text: "Best bowler"
                                },
                                xAxis: {
                                    categories: data.bowler
                                },
                                yAxis: {
                                    title: {
                                        text: 'name'
                                    }
                                },
                                series: [{
                                    name: 'Economi',
                                    data: [data.economyRatess]
                                }]
                            });
                        });
                    }
                        problem9()