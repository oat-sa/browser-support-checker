const supportedBrowsers = require('../supportedBrowsers.js');

module.exports = {
    checkBrowser() {
        return supportedBrowsers.test(navigator.userAgent);
    },
    displayMessage(message) {
        document.open();
        document.write(message);
        document.close();
    },
    checkAndDisplay(unsupportedMessage = '<h1>Browser is not supported!</h1>') {
        const isSupported = this.checkBrowser();
        if (!isSupported) this.displayMessage(unsupportedMessage);
    }
}