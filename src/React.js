import ReactElement from './ReactElement';
import ReactDOMComponent from './ReactDOMComponent';

export default {
    createElement(type, config = {}, children) {
        const props = {};
        const key = (config && config.key) || null;
        for(let propName in config) {
            if(propName !== 'key' && config.hasOwnProperty(propName)) {
                props[propName] = config[propName];
            }
        }
        if(children){
            children =  Array.isArray(children) ? children : [children];
            children = children.concat(Array.prototype.slice.call(arguments,3));
            props.children = children;
        }
        return new ReactElement(type, key, props);
    },
    render(component, container) {
        const reactDom = new ReactDOMComponent(component)
        const markup = reactDom.mountComponent();
        container.innerHTML = markup;
        const vd = component.props.children[1];
        console.log(vd);
        console.log(reactDom.getNode(vd,container,component));
    }
}