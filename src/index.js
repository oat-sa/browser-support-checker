/**
 * This program is free software; you can redistribute it and/or
 * modify it under the terms of the GNU General Public License
 * as published by the Free Software Foundation; under version 2
 * of the License (non-upgradable).
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program; if not, write to the Free Software
 * Foundation, Inc., 51 Franklin Street, Fifth Floor, Boston, MA  02110-1301, USA.
 *
 * Copyright (c) 2021 (original work) Open Assessment Technologies SA;
 */

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
        if (!isSupported) {
            // Reset page content first
            document.body.innerHTML = "";
            // Display message
            this.displayMessage(unsupportedMessage);
        }
    }
}