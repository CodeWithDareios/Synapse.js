//@ts-nocheck

import {Unit, Test} from "./lib/tester.js";
import $elements from "../elements/$main.js";


export const elements = () => Unit('Element Function Building',
    //element: div
    Test(div({}), {
        $: Object.freeze({
            $node_type: 'element',
            is_$: true 
        }),
        type: "div",
        attributes: {},
        children: [] 
    }),
    //element with Text
    Test(div({}, "Hello World!"), {
        $: Object.freeze({
            $node_type: 'element',
            is_$: true
        }),
        type: "div",
        attributes: {},
        children: [
            {
                $: Object.freeze({
                    $node_type: 'text',
                    is_$: true 
                }),
                value: "Hello World!"
            }
        ]
    }),
    //Testing automatic fragment creation (with empty fragment)
    Test(div({}, []), {
        $: Object.freeze({
            $node_type: 'element',
            is_$: true
        }),
        type: "div",
        attributes: {},
        children: [{
                $: Object.freeze({
                    $node_type: 'fragment',
                    is_$: true,
                }),
                contains: []
            }]
    }),
    //testing fragment generation with text
    Test(div({}, ["Hello"]), 
        {$: Object.freeze({
            $node_type: 'element',
            is_$: true
        }),
        type: "div",
        attributes: {},
        children: [{
            $: Object.freeze({
                $node_type: 'fragment',
                is_$: true,
            }),
            contains: [
                {
                    $: Object.freeze({
                        $node_type: 'text',
                        is_$: true 
                    }),
                    value: "Hello"
                }
            ]
        }]
    }),
    //testing fragment creation with text and empty element
    Test(div({}, ["Hello", div({})]), {
        $: Object.freeze({
            $node_type: 'element',
            is_$: true
        }),
        type: "div",
        attributes: {},
        children: [{
            $: Object.freeze({
                $node_type: 'fragment',
                is_$: true,
            }),
            contains: [
                {
                    $: Object.freeze({
                        $node_type: 'text',
                        is_$: true 
                    }),
                    value: "Hello"
                },
                {
                    $: Object.freeze({
                        $node_type: 'element',
                        is_$: true
                    }),
                    type: "div",
                    attributes: {},
                    children: []
                }
            ]
        }]
    })
);