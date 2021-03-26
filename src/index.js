const supportedBrowsers = require('../supportedBrowsers.js');

module.exports = {
    /**
     * Check if the current user agent matches the support list
     * @returns {boolean}
     */
    checkBrowser() {
        return supportedBrowsers.test(navigator.userAgent);
    },
    /**
     * Display message on the current page
     */
    displayMessage(message) {
        document.open();
        document.write(message);
        document.close();
    },
    /**
     * Display message on the current page if needed
     * @param {string} unsupportedMessage - The message to display
     */
    checkAndDisplay(unsupportedMessage = '<h1>Browser is not supported!</h1>') {
        const isSupported = this.checkBrowser();
        if (!isSupported) this.displayMessage(unsupportedMessage);
    }
}