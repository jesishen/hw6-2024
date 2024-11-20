var video;

// Initialize the video element and turn off autoplay and turn off looping.

window.addEventListener("load", function() {
	console.log("Good job opening the window");
	video = document.querySelector("#player1");
	video.autoplay = false;
		console.log("Auto play off" + video.autoplay);
	video.loop = false;
		console.log("Loop off" + video.loop);
});

// u can do this

// Play the video and update the volume information.

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	video.play();
	document.querySelector("#volume").innerHTML = video.volume * 100 + "%"; // update volume
});

// Pause the video.

document.querySelector("#pause").addEventListener("click", function(){
	console.log("Pause video");
	video.pause();
});

// speed up slow down

// Slow the current video speed by 10% each time the button is clicked and log the new speed to the console.

document.querySelector("#slower").addEventListener("click", function(){
	console.log("slower clicked");
	video.playbackRate *= 0.9;
	console.log("New speed: " + video.playbackRate);
});

// Increase the current video speed each time the button is clicked and log the new speed to the console.  Change it by an amount proportional to the slow down. CHECK THIS!!
// If you slow down three times and then speed up three times you should be within 5 digits of 100% again.

document.querySelector("#faster").addEventListener("click", function(){
	console.log("faster clicked");
	video.playbackRate /= 0.9;
	console.log("New speed: " + video.playbackRate);
});

// skip ahead
// DONT GIVE UP

// Advance the current video by 10 seconds.  If the video length has been exceeded go back to the start of the video - no farther. Log the current location of the video.

document.querySelector("#skip").addEventListener("click", function(){
	console.log("skip clicked");
	video.currentTime += 10;
	console.log("Current time is: " + video.currentTime);
})

// Mute/unmute the video and update the text in the button.

document.querySelector("#mute").addEventListener("click", function(){
	console.log("mute clicked");
	if (document.getElementById("mute").innerHTML === "Mute"){
		video.muted = true;
		document.getElementById("mute").innerHTML = "Unmute";
	} else{
		video.muted = false;
		document.getElementById("mute").innerHTML = "Mute";
	}
})

// Change the volume based on the slider and update the volume information.

document.querySelector("#slider").addEventListener("change", function(){ // CHANGE NOT CLICK OMG
	console.log("volume slider");
	video.volume = document.querySelector("#slider").value / 100;
	document.getElementById("volume").innerHTML = video.volume * 100 + "%";
})

// GIRL U GOT THIS UR GETTING THE HANG OF IT!! :) <3

// Utilize the existing oldSchool class on the video element

document.querySelector("#vintage").addEventListener("click", function(){
	console.log("Vintage vibes");
	video.classList.add("oldSchool"); // from css
})

// Remove the oldSchool class from the video.

document.querySelector("#orig").addEventListener("click", function(){
	console.log("vibes removed");
	video.classList.remove("oldSchool");
})