export function getCustomProperty(elem,prop){
    return parseFloat(getComputedStyle(elem).getPropertyValue(prop))||0

}
export function setCustomProperty(elem,prop,value){
elem.style.setProperty(prop,value)
}
export function incrementProperty(elem,prop,inc) {
    setCustomProperty(elem,prop,getCustomProperty(elem,prop)+inc)

}