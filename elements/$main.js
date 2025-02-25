import { currentSupportedElements as $elements } from "./$supported_elements.js";
import { ELEMENT_NODE } from "./$_node.js";


/**
 * Generating all element functions
 */
$elements.forEach(element => {

    globalThis[element] = (attr, ...children) => {

        return ELEMENT_NODE(element, attr, ...children)

    }

});

export default $elements