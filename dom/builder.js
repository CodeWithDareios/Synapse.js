import { FRAGMENT_NODE } from "../elements/$_node.js";

import buildFragment from "./fragmentBuilder.js";
import buildElement from "./elementBuilder.js";
import buildText from "./textBuilder.js";

/**
 * Type definitions
 * @typedef {Object} DomInfo
 * @property {String} $node_type
 * @property {Boolean} is_$
 * 
 * @typedef {Object} DomObject
 * @property {DomInfo} $
 * @property {undefined|String} type 
 * @property {undefined|Object} attributes
 * @property {undefined|DomObject[]} children
 * @property {undefined|DomObject[]} contains
 * 
 * @typedef {DomObject|Array} DOM 
 * 
 */



/**
 * 
 * @param {DOM} dom - the code of the virual dom you want to build
 * @param {Object} info
 */
const DOM_Builder = (dom, info = {}) => {

    let holder;

    if (Array.isArray(dom)) holder = FRAGMENT_NODE(info.name || 'none',dom);
    else holder = dom;

    if (holder.$.is_$) {

        switch(holder.$.$node_type) {
            case 'element':
                buildElement(holder);
                break;
            case 'fragment':
                buildFragment(holder);
                break;
            case 'text':
                buildText(holder);
                break;
            default:
                throw new Error(`There was an error in the building process`);
                break;
        }

    }    
    return holder;
}