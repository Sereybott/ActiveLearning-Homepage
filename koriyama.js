
const stationData = [["ある","たまにある","ない","どこかわからない"],[3, 29, 20,1]];
const slopeData = [["暑いから猛スピード！",
    "すぐに止まれるスピード",
    "ゆっくりなスピード"],[11,40,2]];
const data3 = [["押して渡っている（右側通行）",	"押しているときもそのまま乗っている時もある",	"そのまま乗っている",	"どこかわからない"],[33,11,4,5]]
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
        text: "ガソリンスタンドの出入り口を、自転車で塞いでしまうことはありますか。"
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
new Chart("chart2", slope);
new Chart("chart3",third);