import buildText from "./textBuilder.js";
import buildFragment from "./fragmentBuilder.js";

export default function buildElement(dom) {

     dom.HTML = document.createElement(dom.type);
     dom.children.forEach(child => {

        if (child.$.$node_type == 'element') buildElement(child);
        else if (child.$.$node_type == 'text') buildText(child);
        else if (child.$.$node_type == 'fragment') buildFragment(child);
        else throw new Error(`An error occured in the build process`);

        dom.HTML.appendChild(child.HTML);

     })

}