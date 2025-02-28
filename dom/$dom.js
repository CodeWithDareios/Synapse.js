import { FRAGMENT_NODE } from "../elements/$_node.js";

export default class $DOM {

    /**
     * 
     * @param {Object} props 
     * @param {Function} render 
     */
    constructor(props, render) {

        const is_$DOM = true;
        this.verify = () => is_$DOM;

        this.accessPoint = {
            props: props.props || null,
            states: props.states || null,
            private: Object.freeze(props.private) || null
        }

        this.render = render;
        this.render.bind(this.accessPoint)

    }
    build(...param) {
        
        

    }

}