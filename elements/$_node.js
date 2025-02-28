//@ts-nocheck
import $DOM from "../dom/$dom.js";

/**
 * Type definitions
 * @typedef {String} $_type
 * @typedef {Object} $_attribute
 * @typedef {Array} $_children
 * @typedef {String} $_text
 * @typedef {Object} $node
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
        children: [] 
    };
    children.forEach(child => {
        if (typeof child == 'string') result.children.push(TEXT_NODE(child));
        else if (Array.isArray(child)) result.children.push(FRAGMENT_NODE(...child))
        else if (child.$.is_$ || child.verify()) result.children.push(child);
        else throw new Error(`incompatible input type`);
    });
    return result;

}

/**
 *  
 * @param  {...any} children 
 * @returns 
 */
export const FRAGMENT_NODE = (...children) => {
    
    const result = {
        $: Object.freeze({
            $node_type: 'fragment',
            is_$: true,
        }),
        contains: []
    };
    children.forEach(child => {
        if (typeof child == 'string') result.contains.push(TEXT_NODE(child));
        else if (Array.isArray(child)) result.contains.push(FRAGMENT_NODE(...child))
        else if (child.$.is_$ || child.verify()) result.contains.push(child);
        else throw new Error(`incompatible input type`);
    });
    return result;

}