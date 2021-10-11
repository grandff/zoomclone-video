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

### Call Controls
1) 오디오, 비디오의 track 정보에 접근해서 mute, off 처리
2) 사용자의 모든 비디오 device 정보를 가져와서 선택할 수 있도록 추가
    - navigator.mediaDevices.enumerateDevices()를 사용해서 현재 사용자의 모든 미디어 기기 목록을 가져올 수 있음
    - 이중 카메라에 해당하는 video input만 가져와서 select로 선택할 수 있도록 구현