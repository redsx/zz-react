export default class ReactMount {
    constructor(element){
        console.log('super ReactMount');
        this._element = element;
    }
    findNodePath(node,childNodes){
        const i = childNodes.indexOf(node);
        let path = [];
        console.log(i);
        if(i === -1){
            childNodes.every((child,index) => {
                const children = child.props.children;
                if(!children || !children.length){
                    return false;
                }
                const tmp = this.findNodePath(node, children);
                if(tmp) {
                    path = tmp.concat(index);
                    return false;
                }
                return true;
            })
            return path;
        }
        return [i];
    }
    getNode(node, container, ancestorNode){
        if(node.ref){
            return node.ref;
        }
        const indexes = this.findNodePath(node, [ancestorNode]);
        if(!indexes) {
            return console.error('')
        }
        let element = container.childNodes[0];
        console.log(indexes);
        indexes.forEach((index) => {
            element = element.childNodes[index];
        });
        return element;
    }
}
