
const stationData = [["近鉄・JR郡山","JR大和小泉","自宅"],[53, 13, 17],["koriyama.html","koizumi.html","#"]];
const slopeData = [["暑いから猛スピード！",
    "すぐに止まれるスピード",
    "ゆっくりなスピード"],[11,40,2]];
const barColors = [
"#ff9124",
"#53bd5c",
"#3277e6",
"#ff584d",
"#d175ff"
];

const station = {
    type: "doughnut",
    data: {
        labels: stationData[0],
        datasets: [{
        backgroundColor: barColors,
        data: stationData[1]
        }]
    },
    options: {
        title: {
        display: true,
        text: "自転車通学はどこからですか"
        }
    }
};
const slope = {
    type: "doughnut",
    data: {
        labels: slopeData[0],
        datasets: [{
        backgroundColor: barColors,
        data: slopeData[1]
        }]
    },
    options: {
        title: {
        display: true,
        text: "坂道ではどれぐらいのスピードを出していますか。"
        }
    }
};
new Chart("myChart", station);
new Chart("chart2", slope);

const ctx = document.getElementById("myChart");
const myChart = new Chart(
    ctx,
    station
);
function pielink(click){
    // console.log(click);
    const clickInfo = myChart.getElementsAtEventForMode(click,'nearest',{intersect:true},true);
    const index = clickInfo[0]._index;
    const url = stationData[2][index];
    window.location.href = url;

}
ctx.onclick = pielink;