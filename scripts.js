document.addEventListener('DOMContentLoaded', () => {
    const creationDate = new Date();
    document.getElementById('creation-date').textContent = creationDate.toLocaleString();
});

function navigate(url) {
    window.location.href = url;
}

// 増井 追加分

// チャプターデータはベタ打ちで用意ができ次第入力します
page0VideoDetail = {
    "subtitle": "近鉄郡山方面の登下校時の危険箇所",
    "videoUrl" : "https://www.youtube.com/embed/7527mQ7fpow?rel=0&modestbranding=1&controls=1",
    "chapterDetail" : [
        {
            "sec" : 0,
            "sub" : "導入",
            "series" : "gts", // gts = goToSchool gth = goToHome
            "detail" : "スタート",
        },
        {
            "sec" : 16,
            "sub" : "正門",
            "series" : "gts", // gts = goToSchool gth = goToHome
            "detail" : "奈良高専の正門",
        },
        {
            "sec" : 38,
            "sub" : "バス停",
            "series" : "gts", // gts = goToSchool gth = goToHome
            "detail" : "高専の最寄りのバス停",
        },
        {
            "sec" : 48,
            "sub" : "富雄川付近",
            "series" : "gts", // gts = goToSchool gth = goToHome
            "detail" : "富雄川前の交差点",
        },
        {
            "sec" : 62,
            "sub" : "ガソリンスタンド",
            "series" : "gts", // gts = goToSchool gth = goToHome
            "detail" : "ガソリンスタンドに入る人の邪魔にならないように",
        },
        {
            "sec" : 75,
            "sub" : "小学校前の小道",
            "series" : "gts", // gts = goToSchool gth = goToHome
            "detail" : "登下校時の学童に注意",
        },
        {
            "sec" : 92,
            "sub" : "警察に注意",
            "series" : "gts", // gts = goToSchool gth = goToHome
            "detail" : "ここだけは安全運転",
        },
        {
            "sec" : 114,
            "sub" : "停止線に注意",
            "series" : "gts", // gts = goToSchool gth = goToHome
            "detail" : "前もって止まろう",
        },
        {
            "sec" : 127,
            "sub" : "踏切",
            "series" : "gts", // gts = goToSchool gth = goToHome
            "detail" : "人が多いので注意",
        },
        {
            "sec" : 138,
            "sub" : "まとめ",
            "series" : "gts", // gts = goToSchool gth = goToHome
            "detail" : "動画の内容どれぐらい覚えているカナ？",
        },

    ],
    "chapterLength" : 10,
}

page1VideoDetail = {
    "subtitle": "大和小泉方面の登下校時の危険箇所",
    "videoUrl" : "https://www.youtube-nocookie.com/embed/2vOeY6XCVjc?rel=0&modestbranding=1&controls=1",
    "chapterDetail" : [
        {
            "sec" : 60,
            "sub" : "OP",
            "series" : "gts", // gts = goToSchool gth = goToHome
            "detail" : "OPが始まります",
        },
        {
            "sec" : 60,
            "sub" : "OP",
            "series" : "gts", // gts = goToSchool gth = goToHome
            "detail" : "OPが始まります",
        },
        {
            "sec" : 60,
            "sub" : "OP",
            "series" : "gts", // gts = goToSchool gth = goToHome
            "detail" : "OPが始まります",
        },
        {
            "sec" : 60,
            "sub" : "OP",
            "series" : "gts", // gts = goToSchool gth = goToHome
            "detail" : "OPが始まります",
        },
        {
            "sec" : 60,
            "sub" : "OP",
            "series" : "gts", // gts = goToSchool gth = goToHome
            "detail" : "OPが始まります",
        },
    ],
    "chapterLength" : 5,
}

function secToTime(sec) {
    let returnText = "";
    returnText += sec/60;
    returnText += ":";
    returnText += ("00" + String(sec%60)).slice(0, 2);

    return returnText;
}

function VideoPageInit(page) {

    let subtitleContainer = document.querySelector(".subtitle-container");
    let videoContainer = document.querySelector(".video-container");
    let videoChapterContainer = document.querySelector(".button-option-container");
    let container;

    if(page == 0) {
         container = page0VideoDetail;
        
    } else if (page == 1) {
        container = page1VideoDetail;

    }

    subtitleContainer.innerHTML = "<h2>" + container.subtitle + "</h2>";

    videoContainer.innerHTML = '<iframe src="' + container["videoUrl"] + '" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>';
        for(i=0; i<container["chapterLength"]; i++) {
            videoChapterContainer.innerHTML += '<div class="button-chapter" id="' +(i+1)+ '">' + 
            '<button class="option-button" onclick="chapter(0, ' + container["chapterDetail"][i]["sec"]+')">' + 
            container["chapterDetail"][i]["sub"] + '</button>' +
            '<p class="mouse-over">'+ container["chapterDetail"][i]["detail"] +'</p></div>';
        }

}

function chapter(page, sec) {

    let videoContainer = document.querySelector(".video-container");
    let container;

    if(page == 0) {
        container = page0VideoDetail;
       
   } else if (page == 1) {
        container = page1VideoDetail;

   }

    videoContainer.innerHTML = '<iframe src="' + container["videoUrl"] + '&start='+sec+'&autoplay=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>';
}

// ここまで
