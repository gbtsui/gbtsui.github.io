document.addEventListener('click', function(event) {
    // Check if the clicked element is one of our navigation links
    if (event.target.matches('#cool-thing-fractals')) {
        window.location.href = "/src/cool-stuff/fractals.html";
    } else if (event.target.matches('#cool-thing-about-this-site')) {
        window.location.href = "/src/cool-stuff/about-this-site.html";
    }
}, false);