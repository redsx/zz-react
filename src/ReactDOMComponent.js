import ReactMount from './ReactMount';

const singleTag = {
    area: true,
    base: true,
    basefont: true,
    br: true,
    col: true,
    command: true,
    embed: true,
    frame: true,
    hr: true,
    img: true,
    input: true,
    isindex: true,
    keygen: true,
    link: true,
    meta: true,
    param: true,
    source: true,
    track: true,
    wbr: true,
}
, DOMAttributeNames = {
    className: 'class',
    htmlFor: 'for',
    strokeLinecap: 'stroke-linecap',
    strokeWidth: 'stroke-width',
    stopColor: 'stop-color',
    stopOpacity: 'stop-opacity'
}
, STYLE = 'style';

class ReactDOMComponent extends ReactMount {
    constructor(element){
        super(element);
    }
    mountComponent() {
        const type = this._element.type,
            omitClose = !!singleTag[type],
            _tageClose = omitClose ? '' : `</${type}>`;
        return (
            this._createOpenMarkup() +
            this._createContentMarkup() +
            _tageClose
        );
    }
    receiveComponent(nextProps) {
        this._updateDOMProperties(nextProps);
        this._updateDOMChildren(nextProps);
    }
    _updateDOMProperties(nextProps) {
        const lastProps = this._element.props;
        for(const propKey in lastProps){
            if (nextProps.hasOwnProperty(propKey) ||
                !preProps.hasOwnProperty(propKey)) {
                continue;
            }
            // const node = this.getNode();
            // node.removeAttr(propKey);            
        }
        for(const propKey in lastProps) {
            const lastProp = lastProps[propKey];
            const nextProp = nextProps[propKey];
            if(!nextProps.hasOwnProperty(propKey) || lastProp === nextProp){
                continue;
            }
            if(propKey === STYLE){
                //...
            };
            // const node = this.getNode();
            // node.addAttr();            
        }
    }
    _updateDOMChildren() {
        // 进行diff
        // patch
    }
    _createStyle(style) {
        const reg = /[A-Z]/g;
        let styleStr = '';
        for(const key in style){
            let propName = key.replace(reg,(c)=>`-${c.toLowerCase()}`);
            styleStr += `${propName}:${style[key]};`;
        }
        return styleStr;
    }
    _createProperty() {
        const props = this._element.props;
        let propsStr = '';
        for(const  key in props){
            const value = props[key];
            if(key === 'children'){
                continue;
            } else if(key === 'style'){
                propsStr += `style= ${this._createStyle(value)} `;
            } else if(DOMAttributeNames[key]){
                propsStr += `${DOMAttributeNames[key]}=${value} `;
            } else {
                propsStr += `${key}=${value} `;
            }
        }
        return propsStr;
    }
    _createOpenMarkup() {
        const { type, props } = this._element;
        const omitClose = !!singleTag[type],
            _tageProps = this._createProperty(props),
            _tageOpen = `<${type} ${_tageProps} ${omitClose ? '>' : '/>'}`;
        return _tageOpen;
    }
    _createContentMarkup() {
        // 今天暂定这样吧
        let children = this._element.props.children,
            childrenMarkup = '';
        children =  Array.isArray(children) ? children : [children];
        children.forEach((ele) => {
            if(typeof ele === 'string') {
                childrenMarkup += '<span>'+ele+'</span>';
            } else {
                childrenMarkup += (new ReactDOMComponent(ele)).mountComponent();
            }
        });
        return childrenMarkup;
    }
}
export default ReactDOMComponent;
