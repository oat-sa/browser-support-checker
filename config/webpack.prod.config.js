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
const path = require('path');
const merge = require('webpack-merge');
const loaders = require('./webpack.common.config.js');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const glob = require('glob');

const rootPath = path.resolve(__dirname, '..');
const srcDir = path.resolve(rootPath, 'src');

const entryArray = glob.sync(path.join(srcDir, '**', '*.js'));
const entryObject = entryArray.reduce((acc, item) => {
    const name = path.relative(srcDir, item);
    acc[name] = item;
    return acc;
}, {});

module.exports = merge(loaders, {
    mode: 'production',
    entry: entryObject,
    output: {
        path: path.resolve(__dirname, '../dist'),
        publicPath: path.resolve(__dirname, '../dist'),
        filename: '[name]',
        libraryTarget: 'umd'
    },
    devtool: 'source-map',
    plugins: [new CleanWebpackPlugin()]
});
