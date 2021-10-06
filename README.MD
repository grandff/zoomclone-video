# Zoom Clone Coding Video
## setup
- zoom clone 프로젝트와 동일하게 setup
- npm install socket.io

## Video Call
### User Video
1) User video를 불러와서 화면에 보여지도록 pug에 태그 추가
    - 비디오 영역, 음소거, 카메라 턴오프 등 버튼들 추가
    - video tag의 playsinline은 모바일 기기에 적용되는 props으로 켜자마자 전체화면 되는걸 막아줌
2) app.js에 user video evnet listener 추가
