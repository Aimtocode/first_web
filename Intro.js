//display default content 
document.addEventListener("DOMContentLoaded", function() {
  document.getElementById("defaultOpen").click();
});

//display the page user clicked
function showPage(pageID) {
    var i, tabcontent;
    tabcontent = document.getElementsByClassName("tabcontent");
    for(i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    document.getElementById(pageID).style.display = "block";

}
//display white-spaced page when users cliked the grade content
function init() {
    var tabcontent2;
    tabcontent2 = document.getElementsByClassName("tabcontent2");
    for(var k = 0; k < tabcontent2.length; k++) {
        tabcontent2[k].style.display = "none";
    }
}

window.onload =function() {
init();

};


//Based on the year option that user chooses, represent the chart
function yearSelector() {
    var selectedID = document.querySelector('.semester').value;
    init();
    var selectedTag = document.getElementById(selectedID);
    selectedTag.style.display="block";

    switch(selectedID) {
        case "Spring21":
            Spring21Chart();
            break;
        case "Fall21":
            Fall21Chart();
            break;
        case "Spring24":
            Spring24Chart();
            break;
        case "Fall24":
            Fall24Chart();
            break;
        default:

    }
 
    
}

//grade criteria value: 0 ~ 9 letter : F ~ A
function letter(value) {
    const letterGrades =  ["F", "D", "C-", "C", "C+", "B-", "B", "B+", "A-", "A"];
    return letterGrades[value];
}



//update YAxes by converting value to letter: F ~ A
function setYAxes() {
    return {
        ticks: {
            beginAtZero: true,
            min: 0,  
            max: 10, 
            stepSize: 1, 
            callback: letter
            }
    }
}


//customized labels for each bar 
function updateLabel(tooltipItem) {
    const value = tooltipItem.yLabel;
    const grade = letter(value);
    
    return `Grade: ${grade}`;

}

//bar chart : my grades in Spring 2021
function Spring21Chart(){
const xValues = ["AMS161", "ATM102", "BIO201", "CSE101", "WAE192"];
const yValues = [3, 8, 7, 6, 8];
const barColors = ["red", "green","blue","orange","brown"];

new Chart("Sp21Chart", {
  type: "bar",
  data: {
    labels: xValues,
    datasets: [{
      backgroundColor: barColors,
      data: yValues
    }]
  },
  options: {
    responsive: true,

    legend: {display:false},
    title: {
        display: true,
        text:"Spring2021 Grades (15 CREDITS)"
    },
    scales: {
        yAxes: [setYAxes()]
    },
    tooltips: {
        enabled: true,
        callbacks: {
          label: updateLabel

        }
    }

    }
    });
}
//bar chart : my grades in Fall 2021
function Fall21Chart(){
    const xValues = ["AMS310", "CSE114", "CSE215", "PHY131", "PHY133", "WAE194"];
    const yValues = [7, 9, 7, 8, 9, 7];
    const barColors = ["red", "green","blue","orange","brown","yellow"];
    
    new Chart("Fa21Chart", {
      type: "bar",
      data: {
        labels: xValues,
        datasets: [{
          backgroundColor: barColors,
          data: yValues
        }]
      },
      options: {
        legend: {display:false},
        title: {
            display: true,
            text:"Fall2021 Grades (18 CREDITS)"
        },
        scales: {
            yAxes: [setYAxes()]
            },
        tooltips: {
                enabled: true,
                callbacks: {
                  label: updateLabel
        
            }
        }   
            
        }
    });
}
//bar chart : my grades in Spring 2024
function Spring24Chart(){
    const xValues = ["AMS210", "CSE214", "GEO102", "KOR220", "WRT101"];
    const yValues = [6, 7, 6, 9, 9];
    const barColors = ["red", "green","blue","orange","brown"];
    
    new Chart("Sp24Chart", {
      type: "bar",
      data: {
        labels: xValues,
        datasets: [{
          backgroundColor: barColors,
          data: yValues
        }]
      },
      options: {
        legend: {display:false},
        title: {
            display: true,
            text:"Spring2024 Grades (16 CREDITS)"
        },
        scales: {
            yAxes: [setYAxes()]
            },
        tooltips: {
                enabled: true,
                callbacks: {
                  label: updateLabel
        
                }
        }    
    }
    });
}
//bar chart : my grades in Fall 2024
function Fall24Chart(){
    const xValues = ["AMS301", "CSE216", "CSE220", "CSE303", "SOC247", "WAE102"];
    const yValues = [9, 9, 8, 6, 8, 9];
    const barColors = ["red", "green","blue","orange","brown","yellow"];
    
    new Chart("Fa24Chart", {
      type: "bar",
      data: {
        labels: xValues,
        datasets: [{
          backgroundColor: barColors,
          data: yValues
        }]
      },
      options: {
        legend: {display:false},
        title: {
            display: true,
            text:"Fall2024 Grades (20 CREDITS)"
        },
        scales: {
            yAxes: [setYAxes()]
        },
        tooltips: {
            enabled: true,
            callbacks: {
              label: updateLabel
    
            }
        }
    }
    });
}
