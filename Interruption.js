(function() {
    // Select videos
    const videos = document.querySelectorAll('.video-stream.html5-main-video');
    if (!videos.length) return;

    // Stop, mute, and black them
    videos.forEach(v => {
        v.pause();
        v.muted = true;
        v.style.filter = "brightness(0)";
    });

    // Prevent scroll and navigation
    function blockEvents(e) { e.preventDefault(); e.stopPropagation(); return false; }
    window.addEventListener("scroll", blockEvents, { passive: false });
    window.addEventListener("beforeunload", e => { e.preventDefault(); e.returnValue = ""; });

    // Overlay container (for image + final black screen)
    const overlay = document.createElement("div");
    overlay.style.position = "fixed";
    overlay.style.top = 0;
    overlay.style.left = 0;
    overlay.style.width = "100%";
    overlay.style.height = "100%";
    overlay.style.display = "flex";
    overlay.style.alignItems = "center";
    overlay.style.justifyContent = "center";
    overlay.style.background = "transparent";
    overlay.style.zIndex = "999999";
    document.body.appendChild(overlay);

    // Image element (starts invisible)
    const img = document.createElement("img");
    img.src = "https://media.tenor.com/S4IgNAEu0UAAAAAM/creepy.gif";
    img.style.maxWidth = "60%";
    img.style.maxHeight = "60%";
    img.style.opacity = "0";
    img.style.transition = "opacity 2s";
    overlay.appendChild(img);

    // Ambience sound
    const audio = new Audio(atob('aHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL2l2b3J5ZGV2cmltb2FsdC9Zb3V0dWJlSmF2YXNjcmlwdFVsdGltYXRlL3JlZnMvaGVhZHMvbWFpbi8=')+'creepster.wav');
    audio.loop = true;

    // After 10s: show image + play ambience
    setTimeout(() => {
        img.style.opacity = "1";
        audio.play().catch(()=>{});
    }, 10000);

    // After 15s: start zoom effect
    setTimeout(() => {
        img.style.transition = "transform 20s linear, opacity 2s";
        img.style.transform = "scale(2)";
    }, 15000);

    // After 25s: big black fullscreen box with centered image
    setTimeout(() => {
        audio.pause();
        audio.src = "";

        overlay.style.background = "black";
        overlay.innerHTML = ""; // clear old children safely
        overlay.style.justifyContent = "center";
        overlay.style.alignItems = "center";

        const finalImg = document.createElement("img");
        finalImg.src = "https://media.tenor.com/S4IgNAEu0UAAAAAM/creepy.gif";
        finalImg.style.maxWidth = "70%";
        finalImg.style.maxHeight = "70%";
        overlay.appendChild(finalImg);

        // Try fullscreen
        if (overlay.requestFullscreen) {
            overlay.requestFullscreen().catch(()=>{});
        }
    }, 25000);
})();
