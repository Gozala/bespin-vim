"define metadata";
({
    "dependencies": {
        "vim": "0.0",
        "uicommands": "0.0"
    },
    "provides": [
        {
            "ep": "keymapping",
            "name": "vim-dvorak-keymapping",
            "states": {
                "start": [
                    {
                        "key": "i",
                        "then": "insertMode"
                    },
                    {
                        "key": "s",
                        "exec": "jump-commandline"
                    },
                    {
                        "key": "escape",
                        "exec": "jump-editor"
                    },
                    {
                        "regex":    [ "([0-9]*)", "(t|up)" ],
                        "exec":     "vim moveUp",
                        "params": [
                            {
                                "name": "n",
                                "match": 1,
                                "type": "number",
                                "defaultValue": 1
                            }
                        ]
                    },
                    {
                        "regex": [ "([0-9]*)", "(h|down|return)" ],
                        "exec": "vim moveDown",
                        "params": [
                            {
                                "name": "n",
                                "match": 1,
                                "type": "number",
                                "defaultValue": 1
                            }
                        ]
                    },
                    {
                        "regex": [ "([0-9]*)", "(n|right)" ],
                        "exec": "vim moveRight",
                        "params": [
                            {
                                "name": "n",
                                "match": 1,
                                "type": "number",
                                "defaultValue": 1
                            }
                        ]
                    },
                    {
                        "regex": [ "([0-9]*)", "(d|left)" ],
                        "exec": "vim moveLeft",
                        "params": [
                            {
                                "name": "n",
                                "match": 1,
                                "type": "number",
                                "defaultValue": 1
                            }
                        ]
                    },
                    {
                        "regex": "(.*)",
                        "predicates": { "isCommandKey": false }
                    }
                ],
                "insertMode": [
                    {
                        "key": "escape",
                        "then": "start"
                    },
                    {
                        "key": "(right|ctrl_f)",
                        "exec": "vim moveRight",
                        "params": [
                            {
                                "name": "n",
                                "match": 1,
                                "type": "number",
                                "defaultValue": 1
                            }
                        ]
                    },
                    {
                        "key": "(left|ctrl_b)",
                        "exec": "vim moveLeft",
                        "params": [
                            {
                                "name": "n",
                                "match": 1,
                                "type": "number",
                                "defaultValue": 1
                            }
                        ]
                    }
                ]
            }
        }
    ]
});
"end";
