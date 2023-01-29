/**
 * 
 * @param obj 深拷贝对象
 * @returns 
 */
export function deepClone(obj: any): any {
  const _toString: Function = Object.prototype.toString

  // // 非对象类型
  if (!obj || typeof obj !== 'object') {
    return obj
  }

  // // DOM Node
  if (obj.nodeType && 'cloneNode' in obj) {
    return obj.cloneNode(true)
  }

  // // Date
  if (_toString.call(obj) === '[object Date]') {
    return new Date(obj.getTime())
  }

  // // RegExp
  if (_toString.call(obj) === '[object RegExp]') {
    const flags = []
    // // 匹配方式：全局 多行 忽略大小写
    if (obj.global) {
      flags.push('g')
    }
    if (obj.multiline) {
      flags.push('m')
    }
    if (obj.ignoreCase) {
      flags.push('i')
    }

    return new RegExp(obj.source, flags.join(''))
  }

  // // 对象数组递归式复制
  const result = Array.isArray(obj)
    ? []
    : obj.constructor
      ? new obj.constructor()
      : {}

  for (const key in obj) {
    result[key] = deepClone(obj[key])
  }

  return result
}