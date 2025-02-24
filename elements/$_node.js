//@ts-nocheck
/**
 * Type definitions
 * @typedef {String} $_type
 * @typedef {Object} $_attribute
 * @typedef {Array} $_children
 * @typedef {String} $_text
 * @typedef {Object} $node
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
        children: [] //@type {any[]}
    };
    children.forEach(child => {
        if (typeof child === 'string') result.children.push(TEXT_NODE(child));
        else if (child.$.is_$) result.children.push(child);
    });

}