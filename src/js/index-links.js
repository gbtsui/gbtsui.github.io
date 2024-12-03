document.addEventListener('click', function(event) {
    // Check if the clicked element is one of our navigation links
    if (event.target.matches('#index-link-about')) {
        window.location.href = "/src/about.html";
    } else if (event.target.matches('#index-link-portfolio')) {
        window.location.href = "/src/portfolio.html";
    } else if (event.target.matches('#index-link-cool-stuff')) {
        window.location.href = "/src/cool-stuff.html";
    }
}, false);
//thanks phind!!!
//lowkey not a very useful piece of code but i'm keeping it :3