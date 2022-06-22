export const EnumKeys = <O extends object, K extends keyof O = keyof O>(obj: O): K[] =>
	Object.keys(obj).filter(k => Number.isNaN(+k)) as K[]