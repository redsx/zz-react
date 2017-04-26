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
};

class ReactDOMComponent {
    constructor(element){
        console.log(element);
        this._element = element;
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
            childrenString = '';
        children =  Array.isArray(children) ? children : [children];
        children.forEach((ele) => {
            if(typeof ele === 'string') {
                childrenString += ele;
            } else {
                childrenString += (new ReactDOMComponent(ele)).mountComponent();
            }
        });
        return childrenString;
    }
}
export default ReactDOMComponent;