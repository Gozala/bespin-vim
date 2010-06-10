"define metadata";
({
    "dependencies": {
        "vim": "0.0"
    },
    "provides": [
        {
            "ep": "keymapping",
            "name": "vim keymapping",
            "states": {
                "start": [
                    {
                        "key":      "i",
                        "then":     "insertMode"
                    },
                    {
                        "regex":    [ "([0-9]*)", "(k|up)" ],
                        "exec":     "vim moveUp",
                        "params": [
                            {
                                "name":     "n",
                                "match":    1,
                                "type":     "number",
                                "defaultValue":     1
                            }
                        ]
                    },
                    {
                        "regex":    [ "([0-9]*)", "(j|down|return)" ],
                        "exec":     "vim moveDown",
                        "params": [
                            {
                                "name":     "n",
                                "match":    1,
                                "type":     "number",
                                "defaultValue":     1
                            }
                        ]
                    },
                    {
                        "regex":    [ "([0-9]*)", "(l|right)" ],
                        "exec":     "vim moveRight",
                        "params": [
                            {
                                "name":     "n",
                                "match":    1,
                                "type":     "number",
                                "defaultValue":     1
                            }
                        ]
                    },
                    {
                        "regex":    [ "([0-9]*)", "(h|left)" ],
                        "exec":     "vim moveLeft",
                        "params": [
                            {
                                "name":     "n",
                                "match":    1,
                                "type":     "number",
                                "defaultValue":     1
                            }
                        ]
                    },
                    {
                        "regex":    "(.*)",
                        "predicates": { "isCommandKey": false }
                    }
                ],
                "insertMode": [
                    {
                        "key":      "escape",
                        "then":     "start"
                    },
                    {
                        "key":      "right",
                        "exec":     "vim moveRight",
                        "params": [
                            {
                                "name":     "n",
                                "match":    1,
                                "type":     "number",
                                "defaultValue":     1
                            }
                        ]
                    },
                    {
                        "key":      "left",
                        "exec":     "vim moveLeft",
                        "params": [
                            {
                                "name":     "n",
                                "match":    1,
                                "type":     "number",
                                "defaultValue":     1
                            }
                        ]
                    }
                ]
            }
        }
    ]
});
"end";
