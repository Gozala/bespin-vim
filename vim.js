/* ***** BEGIN LICENSE BLOCK *****
 * Version: MPL 1.1/GPL 2.0/LGPL 2.1
 *
 * The contents of this file are subject to the Mozilla Public License Version
 * 1.1 (the "License"); you may not use this file except in compliance with
 * the License. You may obtain a copy of the License at
 * http://www.mozilla.org/MPL/
 *
 * Software distributed under the License is distributed on an "AS IS" basis,
 * WITHOUT WARRANTY OF ANY KIND, either express or implied. See the License
 * for the specific language governing rights and limitations under the
 * License.
 *
 * The Original Code is Bespin.
 *
 * The Initial Developer of the Original Code is
 * Mozilla.
 * Portions created by the Initial Developer are Copyright (C) 2009
 * the Initial Developer. All Rights Reserved.
 *
 * Contributor(s):
 *   Bespin Team (bespin@mozilla.com)
 *   Irakli Gozalishvili <rfobic@gmail.com>
 *
 * Alternatively, the contents of this file may be used under the terms of
 * either the GNU General Public License Version 2 or later (the "GPL"), or
 * the GNU Lesser General Public License Version 2.1 or later (the "LGPL"),
 * in which case the provisions of the GPL or the LGPL are applicable instead
 * of those above. If you wish to allow use of your version of this file only
 * under the terms of either the GPL or the LGPL, and not to allow others to
 * use your version of this file under the terms of the MPL, indicate your
 * decision by deleting the provisions above and replace them with the notice
 * and other provisions required by the GPL or the LGPL. If you do not delete
 * the provisions above, a recipient may use your version of this file under
 * the terms of any one of the MPL, the GPL or the LGPL.
 *
 * ***** END LICENSE BLOCK ***** */

"define metadata";
({
    "name": "bespin-vim",
    "description": "vim commands for bespin",
    "dependencies": {
        "canon": "0.0",
        "uicommands": "0.0",
        "settings": "0.0"
    },
    "provides": [
        {
            "ep": "setting",
            "name": "cursor.type.mode.normal",
            "description": "The cursor type when in normal mode",
            "type": {
                "name": "selection",
                "data": ["bar", "block", "underline"]
            },
            "defaultValue": "block"
        },
        {
            "ep": "setting",
            "name": "cursor.type.mode.insert",
            "description": "The cursor type when in insert mode",
            "type": {
                "name": "selection",
                "data": ["bar", "block", "underline"]
            },
            "defaultValue": "bar"
        },


        {
            "ep": "command",
            "name": "vim"
        },
        {
            "ep": "command",
            "name": "vim moveLeft",
            "pointer": "#moveLeft"
        },
        {
            "ep": "command",
            "name": "vim moveRight",
            "pointer": "#moveRight"
        },
        {
            "ep": "command",
            "name": "vim moveUp",
            "pointer": "#moveUp"
        },
        {
            "ep": "command",
            "name": "vim moveDown",
            "pointer": "#moveDown"
        },
        {
            "ep": "command",
            "name": "vim normalMode",
            "key": "escape",
            "pointer": "#normalMode"
        },
        {
            "ep": "command",
            "name": "vim insertMode",
            "key": "escape",
            "pointer": "#insertMode"
        }
    ]
})
"end";

var CURSOR_FOCUSED = 'cursor.type.focused',
    CURSOR_NORMAL = 'cursor.type.mode.normal',
    CURSOR_INSERT = 'cursor.type.mode.insert'

// don't like this #temporary #hack & hope to find a bette sulution soon
var uicommands = require("uicommands")
var Range = require('rangeutils:utils/range')
var settings = require('settings').settings

exports.normalMode = function(env) {
    settings.set(CURSOR_FOCUSED, settings.get(CURSOR_NORMAL))
    uicommands.jumpEditor(env)
}
exports.insertMode = function(env) {
    settings.set(CURSOR_FOCUSED, settings.get(CURSOR_INSERT))
}
exports.moveLeft = function(env, args) {
    var view = env.view
    var range = view.getSelectedRange()

    view.moveCursorTo({
        col: Math.max(range.start.col - args.n, 0),
        row: range.start.row
    })
}

exports.moveRight = function(env, args) {
    var view = env.view
    var lines = env.model.lines
    var range = view.getSelectedRange()
    var lineLength = lines[range.start.row].length

    view.moveCursorTo({
        col: Math.min(range.start.col + args.n, lineLength),
        row: range.start.row
    })
}

exports.moveUp = function(env, args) {
    var view = env.view

    while (args.n--) {
        view.moveUp()
    }
}

exports.moveDown = function(env, args) {
    var view = env.view

    while (args.n--) {
        view.moveDown()
    }
}
