import classNameTool from '../classNameTool';

describe(classNameTool, () => {
    it('接受一个 className cat', function () {
        const result = classNameTool('cat');
        expect(result).toEqual('cat');
    });
    it('接受2个 className cat dog', function () {
        const result = classNameTool('cat','dog');
        expect(result).toEqual('cat dog');
    });
    it('接受多个 className', function () {
        const result = classNameTool('cat','dog','bird','bee');
        expect(result).toEqual('cat dog bird bee');
    });
    it('接受 cat null', function () {
        const result = classNameTool('cat',null);
        expect(result).toEqual('cat');
    });
    it('接受 cat 和空格字符串 ', function () {
        const result = classNameTool('cat',' ');
        expect(result).toEqual('cat  ');
    });
    it('接受 cat 和 undefined ', function () {
        const result = classNameTool('cat',undefined);
        expect(result).toEqual('cat');
    });
});
