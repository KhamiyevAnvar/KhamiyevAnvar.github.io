const wheel = document.getElementById("wheel");
const spinBtn = document.getElementById("spin-btn");
const finalValue = document.getElementById("final-value");
const checkSpinWheel = document.getElementsByClassName("wrapper-container").length;

//Object that stores values of minimum and maximum angle for a value
if (checkSpinWheel > 0) {
    const rotationValues = [
        { minDegree: 0, maxDegree: 30, value: "30%" },
        { minDegree: 31, maxDegree: 90, value: "5%" },
        { minDegree: 91, maxDegree: 150, value: "25%" },
        { minDegree: 151, maxDegree: 210, value: "15%" },
        { minDegree: 211, maxDegree: 270, value: "20%" },
        { minDegree: 271, maxDegree: 330, value: "10%" },
        { minDegree: 331, maxDegree: 360, value: "30%" },
    ];
    //Size of each piece
    const data = [16, 16, 16, 16, 16, 16];
    //background color for each piece
    var pieColors = [
        "#ffaa17",
        "#f1b93c",
        "#ff7017",
        "#ff9717",
        "#ff8317",
        "#ff9717",
    ];
    // var newBrElement = document.createElement("br");
    // console.log(newBrElement);
    //Create chart
    let myChart = new Chart(wheel, {
        //Plugin for displaying text on pie chart
        plugins: [ChartDataLabels],
        //Chart Type Pie
        type: "pie",
        data: {
            //Labels(values which are to be displayed on chart)
            labels: ["Smm " + 5 + "%", "Desing " + 30 + "%", "Smm " + 10 + "%", "Smm " + 20 + "%", "Smm " + 15 + "%", "Smm " + 25 + "%"],
            //Settings for dataset/pie
            datasets: [
                {
                    backgroundColor: pieColors,
                    data: data,
                },
            ],
        },
        options: {
            //Responsive chart
            responsive: true,
            animation: { duration: 0 },
            plugins: {
                //hide tooltip and legend
                tooltip: false,
                legend: {
                    display: false,
                },
                //display labels inside pie chart
                datalabels: {
                    color: "#ffffff",
                    formatter: (_, context) => context.chart.data.labels[context.dataIndex],
                    font: { size: 20 }
                },
            },
        },
    });
    //display value based on the randomAngle
    const valueGenerator = (angleValue) => {
        for (let i of rotationValues) {
            //if the angleValue is between min and max then display it
            if (angleValue >= i.minDegree && angleValue <= i.maxDegree) {
                finalValue.innerHTML = `<p>Endirim: ${i.value}</p>`;
                spinBtn.disabled = false;
                break;
            }
        }
    };

    //Spinner count
    let count = 0;
    //100 rotations for animation and last rotation for result
    let resultValue = 101;
    //Start spinning
    var ipSpin = $.getJSON("https://api.ipify.org?format=json", function (data) {
        var ipData = data.ip;
        // return a;
        if (ipData == "11.111.11.111") {//Bu hissede random reqemler evezine ipler yoxlanmalidi.1 Ipden 1 defe carx cevrilmesi ucun
            spinBtn.disabled = false;
        }
        else {
            spinBtn.addEventListener("click", () => {

                spinBtn.disabled = true;
                //Empty final value

                finalValue.innerHTML = `<p>Uğurlar!</p>`;
                //Generate random degrees to stop at
                let randomDegree = Math.floor(Math.random() * (355 - 0 + 1) + 0);
                //Interval for rotation animation
                let rotationInterval = window.setInterval(() => {
                    //Set rotation for piechart
                    /*
                    Initially to make the piechart rotate faster we set resultValue to 101 so it rotates 101 degrees at a time and this reduces by 1 with every count. Eventually on last rotation we rotate by 1 degree at a time.
                    */
                    myChart.options.rotation = myChart.options.rotation + resultValue;
                    //Update chart with new value;
                    myChart.update();
                    //If rotation>360 reset it back to 0
                    if (myChart.options.rotation >= 360) {
                        count += 1;
                        resultValue -= 5;
                        myChart.options.rotation = 0;
                    } else if (count > 15 && myChart.options.rotation == randomDegree) {
                        valueGenerator(randomDegree);
                        clearInterval(rotationInterval);
                        count = 0;
                        resultValue = 101;
                        spinBtn.disabled = true;
                    }
                }, 10);

            });
        }

    })

}