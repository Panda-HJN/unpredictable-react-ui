function classNameTool (...names:(string|undefined)[]) {
    return names.filter(Boolean).join(' ')
}
function classNamePrefix (prefix:string) {
    return function (name:string) {
        return[prefix,name].filter(Boolean).join('-')
    }
}
export  {classNamePrefix};
export default classNameTool;
