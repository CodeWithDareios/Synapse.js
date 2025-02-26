import buildElement from "./elementBuilder.js";
import buildText from "./textBuilder.js";

export default function buildFragment(fragment) {

    fragment.HTML = document.createElement('div')
    fragment.contains.forEach(element => {

        if (element.$.$node_type == 'element') buildElement(element);
        else if (element.$.$node_type == 'text') buildText(element);
        else if (element.$.$node_type == 'fragment') buildFragment(element);
        
        fragment.HTML.appendChild(element.HTML);

    });

}