//const socket = io(); // 이거 시벌 왜 에러남?

// video tags
const myFace = document.getElementById("myFace");
const muteBtn = document.getElementById("mute");
const cameraBtn = document.getElementById("camera");
const camerasSelect = document.getElementById("cameras");

let myStream;
let muted = false;
let cameraOff = false;

// 사용자 현재 미디어 디바이스 목록
async function getCameras() {
    try {
        const devices = await navigator.mediaDevices.enumerateDevices();
        // 카메라에 해당하는 video input만 가져오기
        const cameras = devices.filter(device => device.kind === "videoinput");

        cameras.forEach(camera => {
            const option = document.createElement("option");
            option.value = camera.deviceId;
            option.innerText = camera.label;
            camerasSelect.appendChild(option);
        })
    }catch (e) {

    }
}

// 사용자 카메라 가져옴
async function getMedia(){
    try{
        // 카메라에 있는 video, audio 정보 
        myStream = await navigator.mediaDevices.getUserMedia({
            audio : true,
            video: true
        });

        // pug에 보여줌
        myFace.srcObject = myStream;

        // 사용자 미디어 디바이스 목록 가져옴
        await getCameras()
    }catch(e){
        console.log(e);
    }
}

getMedia();

// button event listener
function handleMuteClick() {
    // 오디오 트랙에 접근해 track value를 변경해서 mute 처리
    myStream
        .getAudioTracks()
        .forEach(track => track.enabled = !track.enabled);
    if(!muted){
        muteBtn.innerText = "Unmute";
        muted = true;
    }else{
        muteBtn.innerText = "Mute";
        muted = false;
    }
}

function handleCameraClick() {
    // 비디오 트랙에 접근해 track value를 변경해서 off 처리
    myStream
        .getVideoTracks()
        .forEach(track => track.enabled = !track.enabled);
    if(cameraOff){
        cameraBtn.innerText = "Turn Camera Off";
        cameraOff = false;
    }else{
        cameraBtn.innerText = "Turn Camera ON";
        cameraOff = true;
    }
}

muteBtn.addEventListener("click", handleMuteClick);
cameraBtn.addEventListener("click", handleCameraClick);