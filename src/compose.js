const compose = (...funcs) => arg => funcs.reduceRight((_arg, func) => func(_arg), arg);

export default compose;
