function classNameTool (...names:(string|undefined)[]) {
    return names.filter(Boolean).join(' ')
}
function classNamePrefix (prefix:string) {
    return function (name:string|Array<string>) {
        if (Array.isArray(name)){
            const allClassNames = name.map((item)=>{
                return [prefix,item].filter(Boolean).join('-')
            });
            return allClassNames.join(' ')
        }
        return[prefix,name].filter(Boolean).join('-')
    }
}
export  {classNamePrefix};
export default classNameTool;
