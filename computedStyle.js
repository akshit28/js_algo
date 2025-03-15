const getComputedStyle = (property, value) => {
    const div = document.createElement('div')
    div.style[property] = value

    const styles = window.getComputedStyle(document.body.appendChild(div))

    let computedStyle = styles[property]

    document.body.removeChild(div)

    return computedStyle
}

const getElementWithStyle = (rootElement, property, value) => {
    const computedValue = getComputedStyle(property, value)
    const result = []

    const search = (element, property, value) => {
        let computedStyle = window.getComputedStyle(element)
        let elementPropertyValue = computedStyle[property]

        if(elementPropertyValue === computedValue){
            result.push(element)
        }

        for(const elem of element.children){
            search(elem, property, value)
        }
    };

    search(rootElement, property, value)

    return result;
}   