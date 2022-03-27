module.exports = {
  range: (start, end, step) => {
    if (!start) {
      start = 0
    }
    if (!end) {
      end = 1
    }
    if (!step) {
      step = 1
    }
    let list = []
    for (i = start; i < end; i += step) {
      list.push(i)
    }
    return list
  },
  copy: (input, formula) => {
    if (Array.isArray(input)) {
      const list = []
      if ((typeof formula[0]) === 'number' && (typeof formula[1]) === 'number') {
        if (!(typeof formula[2]) === 'number' || !formula[2]) {
          formula[2] = 1
        }
        console.log(formula[2])
        for (i = formula[0]; i < input.length && i < formula[1]; i += formula[2]) {
          list.push(input[i])
        }
        return list
      } else {
        console.log('Invalid copy formulas')
      }
    } else {
      console.log(`Your input: ${input}\nis INVALID`)
    }
  },
  stringer: (length, callback, charset) => {
    if (!charset || ! (typeof charset) === 'string') {
      charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890'
    }
    const list = [];
    for (i = 0; i < length; i++) {
      list.push(null)
    }
    for (n = 0; n < charset.length ** length; n++) {
      list.forEach((item, i) => {
        list[i] = charset[Math.floor((n * charset.length * charset.length ** i) / ((charset.length ** length))) % charset.length]
      })
      let string = ''
      for (i = 0; i < list.length; i++) {
        string += list[i]
      }
      callback(string)
    }
  },
  simplify: (input) => {
    if (Array.isArray(input)) {
      const list = []
      for (item of input) {
        if (!list.includes(item)) {
          list.push(item)
        }
      }
      return list
    } else {
      console.log('Input must be an Array!')
    }
  },
  frequency: (input) => {
    if (Array.isArray(input)) {
      const count = new Map()
      for (item of input) {
        let value = count.get(item)
        if (value) {
          count.set(item, value + 1)  
        } else {
          count.set(item, 1)
        }
      }
      return count
    } else {
      console.log('Input must be an Array!')
    }
  }
}