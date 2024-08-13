window.addEventListener("load", function () {
  
    // 비디오 항목 체크한다. (video태그로 파악)
    // 모든 비디오 태그를 변수에 저장
    let videos = this.document.querySelectorAll(".swVisual video");
    // console.log(videos);
    // 비디오 시간 체크
    // 비디오의 재생 시간을 보관할 배열을 생성
    let videoTimeArr = [];
    console.log(videoTimeArr);
    // 비디오 재생 시간을 배열에 저장하는 반복문
    videos.forEach((video, index) => {
      // console.log(video ,index);
      // console.log(videos);
      // console.log(videos[0]);
      // console.log(videos[0].duration);
      // console.log(videos[1].duration);
      // console.log(videos[2].duration);
      // console.log(videos[3].duration);
      // console.log(videos[4].duration);
  
      // Math.ceil()비디오 재생 시간을 올림하여 가장 가까운 정수로 변환
      videoTimeArr[index] = Math.ceil(video.duration);
    });
    console.log(videoTimeArr);
    //   첫번째 비디오 자동 실행
    let videoIndex = 0;
    videos[videoIndex].play();
  // visual slide
  // swiper슬라이드 초기화
  const swVisual = new Swiper(".swVisual", {
      loop: true,
    });
  // 슬라이드 변경 이벤트시 처리
  swVisual.on("slideChange" , function(){
      // console.log("슬라이드 교체");
      // 진행중인 비디오 멈춤
      videos[videoIndex].pause()
      // 다음 화면에 보이는 swiper슬라이드 번호
      // console.log(swVisual.activeIndex);
      // console.log(swVisual.realIndex);
      videoIndex = swVisual.realIndex
      // console.log(videoIndex);
      videos[videoIndex].play();
      
      
      
  })
  });
  