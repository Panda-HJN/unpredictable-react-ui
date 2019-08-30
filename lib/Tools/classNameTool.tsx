function classNameTool (...names:(string|undefined)[]) {
    return names.filter(Boolean).join(' ')
}

// 给className 加前缀
//  pre1 =>  str1  === pre1-str1
//  preB => [str2,str3] === preB-str2 preB-str3
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
