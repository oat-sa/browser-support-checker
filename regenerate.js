const {exec} = require('child_process');
const BrowserList = require('@oat-sa/browserslist-config-tao');

const {getUserAgentRegExp} = require('browserslist-useragent-regexp');

const regExp = getUserAgentRegExp({browsers: BrowserList, allowHigherVersions: true});

exec(`echo \"module.exports = ${regExp}\" > supportedBrowsers.js`)
