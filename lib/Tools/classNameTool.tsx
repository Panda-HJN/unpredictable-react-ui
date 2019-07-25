function classNameTool (...names:(string|undefined)[]) {
    return names.filter(Boolean).join(' ')
}
export default classNameTool;
