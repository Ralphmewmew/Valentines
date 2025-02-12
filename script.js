function moveButton() {
    var x = Math.random() * (window.innerWidth - 100); // Corrected "Window" to "window"
    var y = Math.random() * (window.innerHeight - 50); // Corrected "Window" to "window"

    this.style.position = "absolute";
    this.style.left = x + "px"; // Corrected "Left" to "left"
    this.style.top = y + "px";  // Corrected "top" to lowercase
};

// Function to create flowers
function showFlowers() {
    var numberOfEmojis = 50; 

// creates flower emojis to create them and place them all over the screen
for (var i=0; i < numberOfEmojis; i++) { //
    var emoji = document.createElement("div");
    emoji.textContent = "❤️";

    // this creates a random position for the emojis
    emoji.style.position = "absolute";
    emoji.style.left = Math.random() * window.innerWidth + "px"; // Random x position
    emoji.style.top = Math.random() * window.innerHeight + "px"; // Random y position
    emoji.style.fontSize = "30px";
    emoji.style.transition = "transforms 1s ease"; // add transition for animation

    emoji.style.transform = "rotate(" + Math.random() * 360 + "deg)"; // Random rotation

    emoji.style.animation = "float 5s ease-in-out infinite"; // add animation to emoji

    document.body.appendChild(emoji);

    setTimeout(function() {
        emoji.remove();
    }, 5000); // remove emoji after 5 seconds
}
};

document.getElementById("noBtn").addEventListener("mouseover", moveButton); // Corrected "documemt" to "document"
document.getElementById("noBtn").addEventListener("touchstart", moveButton); 

document.querySelector(".yesBtn").addEventListener("click", showFlowers);