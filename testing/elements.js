//@ts-nocheck

import {Unit, Test} from "./lib/tester.js";
import $elements from "../elements/$main.js";


Unit('Element Function Building',
    //element: div
    Test(div({}), {
        $: Object.freeze({
            $node_type: 'element',
            is_$: true 
        }),
        type: "div",
        attributes: {},
        children: [] 
    })
);