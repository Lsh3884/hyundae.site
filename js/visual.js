window.addEventListener("load", function () {
  AOS.init()
  // 비디오 항목 체크한다 (vedio태그로 파악)
  // 모든 비디오 태그를 변수에 저장
  let videos = this.document.querySelectorAll(".swVisual video");
  // console.log(videos);
  //비디오시간체크
  let videoTimeArr = []; //비디오재생시간을 보관할 배열을 생성
  //비디오 재생시간을 배열에 저장하는 반복문
  videos.forEach((video, index) => {
    // console.log(videos,index);
    // console.log(videos);
    // console.log(videos[0]);
    // console.log(videos[0].duration);
    // console.log(videos[1].duration);

    //Math.ceil()비디오 재생시간을 올림하여 가장 가까운 정수로 변환
    videoTimeArr[index] = Math.ceil(video.duration);
  });
  // console.log(videoTimeArr);
  // 첫번째 비디오 자동 실행
  let videoIndex = 0;
  videos[videoIndex].play();
  // 비주얼 슬라이드
  //슬라이드 초기화
  const swVisual = new Swiper(".swVisual", {
    Loop: true,
  });
  //슬라이드 변경 이벤트 처리
  swVisual.on("slideChange", function () {
    // console.log("슬라이드 교체");
    // 진행중인 비디오 정지
    videos[videoIndex].pause();
    //다음 화면에 보이는 swiper슬라이드 번호
    // console.log(swVisual.activeIndex);
    // console.log(swVisual.realIndex);
    videoIndex = swVisual.realIndex;
    // console.log(videoIndex);
    videos[videoIndex].play();
  });
  //비디오 영상이 플레이가 끝나면 다음 슬라이드로 이동
  //늘어나는 흰색bar
  let bars = this.document.querySelectorAll(".bar");
  // console.log(bars);
  //늘어나는 길이를 위한 값(최대 100)
  let barScaleW = 0;
  //타이머설정
  let videoTimer;
  //   비디오 ㅌㅏ이머를 설정하고 초기화 하는 함수를 정의하고 호출
  videoReset();
  function videoReset() {
    barScaleW = 0;
    // 최초의 바를 초기화
    bars.forEach(function (bar) {
      bar.style.width = `${barScaleW}%`;
    });
    //활설화될 바 클래스 선택
    let activeBar = bars[videoIndex];
    // console.log(activeBar);
    // setTimeout: 1번 실행 clearTimeout()
    // setIntever: 시간마다 연속실행 clearintevar()
    clearInterval(videoTimer);
    let videoTime = videoTimeArr[videoIndex];
    videoTimer = setInterval(() => {
      barScaleW++;
      activeBar.style.width = `${barScaleW}%`;
      // console.log(barScaleW);
      //   바의 길이가 100% 이상이 되면 실행한다
      if (barScaleW >= 100) {
        clearInterval(videoTimer);
        videoReset();
        swVisual.slideNext();
      }
    }, videoTime * 10);
  }
  const visualControl = this.document.querySelectorAll(".visual-control > li");
visualControl.forEach(function (item, index) {
    item.addEventListener("click", function(){
        videoIndex = index
        swVisual.slideTo(videoIndex)
    })
  });
  // 비지니스 스와이퍼================
  const swBusiness = new Swiper(".swBusiness" , {
    loop: true,
    speed: 500,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
  })
});
