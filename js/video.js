var video;
let lastVolume;

// Initialize the video element and turn off autoplay and turn off looping.

window.addEventListener("load", function() {
	console.log("Good job opening the window");
	video = document.querySelector("#player1");
	video.autoplay = false;
	video.loop = false;
	document.querySelector("#volume").innerHTML = video.volume * 100 + "%";
	lastVolume = video.volume;
});

// u can do this

// Play the video and update the volume information.

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	if (video.paused){
		video.play();
		this.innerHTML = "Pause";
	}else {
		video.pause()
		this.innerHTML = "Play";
	}
	document.querySelector("#volume").innerHTML = video.volume * 100 + "%"; // update volume
});

// Pause the video.

document.querySelector("#pause").addEventListener("click", function(){
	console.log("pause video");
	video.pause();
	document.querySelector("#play").innerHTML = "Play";
});

// speed up slow down

// Slow the current video speed by 10% each time the button is clicked and log the new speed to the console.

document.querySelector("#slower").addEventListener("click", function(){
	console.log("slower clicked")
	video.playbackRate *= 0.9;
	console.log("New speed: " + video.playbackRate);
});

// Increase the current video speed each time the button is clicked and log the new speed to the console.  Change it by an amount proportional to the slow down. CHECK THIS!!
// If you slow down three times and then speed up three times you should be within 5 digits of 100% again.

document.querySelector("#faster").addEventListener("click", function(){
	console.log("faster clicked")
	video.playbackRate /= 0.9;
	console.log("New speed: " + video.playbackRate);
});

// skip ahead
// DONT GIVE UP

// Advance the current video by 10 seconds.  If the video length has been exceeded go back to the start of the video - no farther. Log the current location of the video.

document.querySelector("#skip").addEventListener("click", function(){
	console.log("skip clicked")
	video.currentTime += 10;
	if (video.currentTime >= video.duration){
		video.currentTime = 0;
	}
	console.log("Current time is: " + video.currentTime);
})

// Mute/unmute the video and update the text in the button.

document.querySelector("#mute").addEventListener("click", function(){
	console.log("mute clicked")
	if(video.muted){
		video.muted = false;
		video.volume = lastVolume;
		this.innerHTML = "Mute";
	} else{
		lastVolume = video.volume;
		video.muted = true;
		this.innerHTML = "Unmute"
	}
})

// Change the volume based on the slider and update the volume information.

document.querySelector("#slider").addEventListener("input", function(){ // INPUT NOT CLICK OMG
	console.log("changing")
	video.volume = this.value / 100;
	document.querySelector("#volume").innerHTML = this.value * 100 + "%"; // volume%
})

// GIRL U GOT THIS UR GETTING THE HANG OF IT!! :) <3

// Utilize the existing oldSchool class on the video element

document.querySelector("#vintage").addEventListener("click", function(){
	console.log("Vintage vibes")
	video.classList.add("oldSchool"); // from css
})

// Remove the oldSchool class from the video.

document.querySelector("#orig").addEventListener("click", function(){
	console.log("vibes removed")
	video.classList.remove("oldSchool")
})
