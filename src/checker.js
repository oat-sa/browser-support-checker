document.onload(function() {
    // Reset page content first
    document.body.innerHTML = "";
    require('./index.js').checkAndDisplay();
});