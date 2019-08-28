/*---------------------------------------------------------------------------------------------
 *  Copyright (c) kkChan(694643393@qq.com). All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

'use strict'

require('node-type-extensions');

var identity = 0;

module.exports = function() {
    if(identity >= 999) {
        identity = 0;
    }

    return `${new Date().getTime() - new Date('2015-1-1').getTime()}${(++identity).comp('000')}`;
};