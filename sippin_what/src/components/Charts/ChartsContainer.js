import React from 'react';
import axios from 'axios';
import c3 from 'react-c3js';



class Charts extends React.Component {
  constructor(props) {
    super(props);
  }
  componentWillMount() {
    axios.get("/api/allWines/age").then((response) => {
        console.log("Lets test charts", response);
        const ageChart = c3.generate({
            bindto: ".ageChart",
            data: {

                xs: {
                    age: "age_x"
                },
                colors: {
                    age: "#8f8023"
                },
                columns: [
                //    ["age", ...response.map(age => age.ageCount)], 
                   ["age", "5"], 
                   ["age_x", "33"]

                ],
                type: "area"
            },
            axis: {
                x: {
                //    type: "category",
                //     label: "Age",
                    tick: {
                        fit: false
                    }
                },
                y: {
                    label: "Count"
                }
            }
        })
        
    })
    axios.get("/api/allWines/zip").then((response) => {
        const zipChart = c3.generate({
            bindto: ".zipChart",
            data: {
                xs: {
                    zip: "zip_x"
                },
                colors: {
                    zip: "#8f8023"
                },
                columns: [
                    ["zip", ...response.map(zip => zip.zipCount)],
                    ["zip_x", ...response.map(zip => zip.zip)]

                ],
                type: "bar"
            },
            axis: {
                x: {
                    type: 'category',
                    label: "Zip",
                    tick: {
                        fit: false
                    }
                },
                y: {
                    label: "Count"
                }
            }
        })
    })

    axios.get("/api/allWines/firstmatch").then((response) => {
       const wineChart = c3.generate({
           bindto: ".wineChart",
           data: {
               xs: {
                   first_match: "first_match_x"
               },
               colors: {
                   first_match: "#8f8023"
               },
               columns: [
                   ["first_match", ...response.map(first_match => first_match.first_matchCount)],
                   ["first_match_x", ...response.map(first_match => first_match.first_match)]

               ],
               type: "bar"
           },
           axis: {
               x: {
                   type: 'category',
                   label: "Wine",
                   tick: {
                       fit: false
                   }
               },
               y: {
                   label: "Count"
               }
           }
       })
   })

   axios.get("/api/allWines/food").then((response) => {
        const wineChart = c3.generate({
            bindto: ".foodChart",
            data: {
                xs: {
                    food: "food_x"
                },
                colors: {
                    food: "#8f8023"
                },
                columns: [
                    ["food", ...response.map(food => food.foodCount)],
                    ["food_x", ...response.map(food => food.food)]

                ],
                type: "area"
            },
            axis: {
                x: {
                    type: 'category',
                    label: "Food",
                    tick: {
                        fit: false
                    }
                },
                y: {
                    label: "Count"
                }
            }
        })
    })

    setTimeout(function () {
        // chart.load({
        //     columns: [
                
        //     ]
        // });
    }, 1500);
  }
  render() {
    return (
    <div> 
    {/* {this.state.Charts(chart => Charts.chart)} */}
    <h1>This is a Statistics Page</h1>
    </div>
  )
  };
}
export default Charts;
