
const labels = ["はい","いいえ"];
const xValues = [
    {financial: labels[0],url:'bike.html'},
    {financial: labels[1],url:'#'},
];
const yValues = [83,33];
const barColors = [
    "#ff9124",
    "#53bd5c",
];

const conf = {
    type: "doughnut",
    data: {
        labels: labels,
        datasets: [{
        backgroundColor: barColors,
        data: yValues
        }]
    },
    options: {
        title: {
        display: true,
        text: "自転車通学はどこからですか"
        }
    }
};
new Chart("myChart", conf);

const ctx = document.getElementById("myChart");
const myChart = new Chart(
    ctx,
    conf
);

function pielink(click){
    // console.log(click);
    const clickInfo = myChart.getElementsAtEventForMode(click,'nearest',{intersect:true},true);
    const index = clickInfo[0]._index;
    const url = xValues[index].url
    window.location.href = url;

}
ctx.onclick = pielink;