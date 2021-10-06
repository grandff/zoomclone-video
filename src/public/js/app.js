//const socket = io();

// video tags
const myFace = document.getElementById("myFace");
const muteBtn = document.getElementById("mute");
const cameraBtn = document.getElementById("camera");

let myStream;
let muted = false;
let cameraOff = false;

// 사용자 카메라 가져옴
async function getMedia(){
    try{
        // 카메라에 있는 video, audio 정보 
        myStream = await navigator.mediaDevices.getUserMedia({
            audio : true,
            vide: true
        });

        console.log(myStream);

        // pug에 보여줌
        myFace.srcObject = myStream;
    }catch(e){
        console.log(e);
    }
}

getMedia();

// button event listener
function handleMuteClick() {
    if(!muted){
        muteBtn.innerText = "Unmute";
        muted = true;
    }else{
        muteBtn.innerText = "Mute";
        muted = false;
    }
}

function handleCameraClick() {
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