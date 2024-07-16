
const stationData = [["一時停止している","している時もしていない時もある","一時停止していない"],[9,3,1]];
const data3 = [["押して渡っている（右側通行）",	"押しているときもそのまま乗っている時もある",	"そのまま乗っている",	"どこかわからない"],[10,0,2,1]]
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
        text: "富雄川沿いの自転車道から県道に入る際に、一時停止していますか"
        }
    }
};
const third = {
    type: "doughnut",
    data: {
        labels: data3[0],
        datasets: [{
        backgroundColor: barColors,
        data: data3[1]
        }]
    },
    options: {
        title: {
        display: true,
        text: "富雄川の横断歩道で自転車を押して渡っていますか。"
        }
    }
};
new Chart("myChart", station);
new Chart("chart2", third); 