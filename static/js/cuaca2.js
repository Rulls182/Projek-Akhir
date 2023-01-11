// Set new default font family and font color to mimic Bootstrap's default styling
Chart.defaults.global.defaultFontFamily = '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#292b2c';

// Area Chart Example
var ctx = document.getElementById("weather");

function () {
    let appid = 'cadb4f8880792c163567e70aa67d122f';
    let lat = '-6.291744211707815';
    let lon = '106.84260940551759';
    let url = 'https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${appid}';
    let r = requests.get(url.format()).json();
}

// temp = [];
// temp[0] = r['list'][1]['main']['temp'];
// temp[1] = r['list'][2]['main']['temp'];
// temp[2] = r['list'][3]['main']['temp'];
// temp[3] = r['list'][4]['main']['temp'];
// temp[4] = r['list'][5]['main']['temp'];
// temp[5] = r['list'][6]['main']['temp'];
// temp[6] = r['list'][7]['main']['temp'];

// temp = {
//     'temp1': r['list'][1]['main']['temp'],
//     'temp2': r['list'][2]['main']['temp'],
//     'temp3': r['list'][3]['main']['temp'],
//     'temp4': r['list'][4]['main']['temp'],
//     'temp5': r['list'][5]['main']['temp'],
//     'temp6': r['list'][6]['main']['temp'],
//     'temp7': r['list'][7]['main']['temp'],
// // };
// jam = {
//     'jam1': r['list'][1]['dt_txt'],
//     'jam2': r['list'][2]['dt_txt'],
//     'jam3': r['list'][3]['dt_txt'],
//     'jam4': r['list'][4]['dt_txt'],
//     'jam5': r['list'][5]['dt_txt'],
//     'jam6': r['list'][6]['dt_txt'],
//     'jam7': r['list'][7]['dt_txt'],
// };
// jamm = [];
// jamm[0] = jam1;
// jamm[1] = r['list'][1]['dt_txt'];
// jamm[2] = r['list'][1]['dt_txt'];
// jamm[3] = r['list'][1]['dt_txt'];
// jamm[4] = r['list'][1]['dt_txt'];
// jamm[5] = r['list'][1]['dt_txt'];
// jamm[6] = r['list'][1]['dt_txt'];

var day = [];
var day0 = r;
var day1 = "asd";
var day2 = "asd";
var myLineChart = new Chart(ctx, {

    type: 'line',
    data: {
        labels: [day, day0, day1],
        datasets: [{
            label: "Suhu",
            lineTension: 0.3,
            backgroundColor: "rgba(2,117,216,0.2)",
            borderColor: "rgba(2,117,216,1)",
            pointRadius: 5,
            pointBackgroundColor: "rgba(2,117,216,1)",
            pointBorderColor: "rgba(255,255,255,0.8)",
            pointHoverRadius: 5,
            pointHoverBackgroundColor: "rgba(2,117,216,1)",
            pointHitRadius: 50,
            pointBorderWidth: 2,
            data: [0, 20, 30, 40, 50, 60]
        }],
    },
    options: {
        scales: {
            xAxes: [{
                time: {
                    unit: 'date'
                },
                gridLines: {
                    display: false
                },
                ticks: {
                    maxTicksLimit: 7
                }
            }],
            yAxes: [{
                ticks: {
                    min: 0,
                    max: 60,
                    maxTicksLimit: 4
                },
                gridLines: {
                    color: "rgba(0, 0, 0, .125)",
                }
            }],
        },
        legend: {
            display: false
        }
    }
});