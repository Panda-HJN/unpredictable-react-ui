let importAll = (requireContext)=>{
    requireContext.keys().forEach(requireContext)
};
try {
    console.log(require.context('../../icons/',true,/\.svg$/));
    importAll(require.context('../../icons/',true,/\.svg$/))
}catch (e) {
    console.log(e)
}
