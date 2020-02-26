var video = document.querySelector("#myVideo");

function getVid(){
	video = document.querySelector("#myVideo");
	video.load();
}

function playVid(){
	video.play();
	document.getElementById("volume").innerHTML = (video.volume*100 + "%");
	console.log("Play Video")
}

function pauseVid() {
	video.pause();
	console.log("Pause Video")
}

function decreaseSpeed() {
	video.playbackRate = video.playbackRate*0.8;
  console.log("Speed is "+ video.playbackRate)
}

function increaseSpeed() {
	video.playbackRate = video.playbackRate*1.25;
	console.log("Speed is "+ video.playbackRate)
}

function skipAhead() {
	if (video.ended){
		video.currentTime = 0;
		video.playbackRate = 1;
		console.log("Current location is " + video.currentTime);
	}
	else {
		video.currentTime = video.currentTime+60;
	}
	console.log("Current location is " + video.currentTime);
}

function mute() {
	if (video.muted === true) {
		console.log("Unmuted")
		video.muted = false;
		document.getElementById("mute").innerHTML= "Mute";
	}
	else if (video.muted === false) {
		console.log("Muted")
		video.muted = true;
		document.getElementById("mute").innerHTML= "Unmute";
	}
}

function changeVolume() {
	video.volume = volumeSlider.value/100;
	document.getElementById("volume").innerHTML = volumeSlider.value + "%";
	console.log("Volume is " + volumeSlider.value);
}

function gray() {
	console.log("In grayscale")
	video.classList.toggle("grayscale");
}

function color() {
	console.log("In color")
	video.classList.toggle("grayscale");
}
