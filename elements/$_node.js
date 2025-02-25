import { generateFragmentID } from "./$_utils.js";

//@ts-nocheck
/**
 * Type definitions
 * @typedef {String} $_type
 * @typedef {Object} $_attribute
 * @typedef {Array} $_children
 * @typedef {String} $_text
 * @typedef {Object} $node
 * @typedef {'beginning' | 'ending'} fragmentBookmarkType
 * @typedef {Object} info$node
 */

/**
 * 
 * @param {$_text} text 
 * @returns {$node}
 */
export const TEXT_NODE = (text) => {
    return {
        $: Object.freeze({
            $node_type: 'text',
            is_$: true 
        }),
        value: text
    }
}


/**
 * Generates the virtual DOM of an element
 * @param {$_type} type 
 * @param {$_attribute} attributes 
 * @param {$_children} children 
 * @return {$node}
 */
export const ELEMENT_NODE = (type, attributes = {}, ...children) => {

    const result = {
        $: Object.freeze({
            $node_type: 'element',
            is_$: true 
        }),
        type: type,
        attributes: attributes,
        children: [...children] 
    };

}

export const FRAGMENT_NODE = (id = 'none', ...children) => {
    
    return {
        $: Object.freeze({
            $node_type: 'fragment',
            is_$: true,
            $ID: id == 'none' ? generateFragmentID() : id
        }),
        contains: [...children]
    }

}