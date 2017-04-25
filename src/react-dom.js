var singleTag = {
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
/**
 * 
 * 
 * @param {object} element 
 * @returns {string} html string
 */
function renderNativeComponent(element) {
    const { type, props } = element;
    const omitClose = !!singleTag[type];
    // 暂时不渲染属性
    const _tageOpen = `<${type + (omitClose ? '/' : '')}>`
    const _tageClose = omitClose ? '' : `</${type}>` 
    if(props.children){
        return _tageOpen + renderChild(props.children) + _tageClose;
    } else {
        return _tageOpen + _tageClose;
    }
}
/**
 * 
 * 
 * @param {?Array} children 
 * @returns {string} html string
 */
function renderChild(children) {
    var childrenString = '';
    children =  Array.isArray(children) ? children : [children];
    children.forEach((dom) => {
        if(typeof dom === 'string') {
            childrenString += dom;
        } else {
            childrenString += renderNativeComponent(dom);
        }
    });
    return childrenString;
}
const reactDOM = {
    render(component,container) {
        const markup = renderNativeComponent(component);
        // 源码写法
        // Asynchronously inject markup by ensuring that the container is not in
        // the document when settings its `innerHTML`.
        // 我的写法
        // container.innerHTML = markup;
        const parent = container.parent;
        if(parent){
            const next = container.nextSibling;
            parent.removeChild();
            container.innerHTML = markup;
            if(next){
                parent.insertBefore(container,next);
            } else {
                parent.appendChild(container);
            }
        } else {
            container.innerHTML = markup;
        }
    }
};
export default reactDOM;