const fs = require('fs');
const BrowserList = require('@oat-sa/browserslist-config-tao');
const {getUserAgentRegExp} = require('browserslist-useragent-regexp');
const regExp = getUserAgentRegExp({browsers: BrowserList, allowHigherVersions: true});

fs.writeFileSync('./supportedBrowsers.js', `module.exports = ${regExp};`);