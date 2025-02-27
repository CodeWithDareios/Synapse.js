//@ts-nocheck

/**
 * Type definitions
 * @typedef {String} $_type
 * @typedef {Object} $_attribute
 * @typedef {Array} $_children
 * @typedef {String} $_text
 * @typedef {Object} $node
 * @typedef {Object} info$node
 * @typedef {string} fragmentID 
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
    // TODO: account for fragment id handeling when finished 
    children.forEach(child => {
        if (typeof child == 'string') result.children.push(TEXT_NODE(child));
        else if (Array.isArray(child)) result.children.push(FRAGMENT_NODE(...child))
        else result.children.push(child);
    });
    return result;

}

/**
 * 
 * @param {fragmentID} id 
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
        else result.contains.push(child);
    });
    return result;

}