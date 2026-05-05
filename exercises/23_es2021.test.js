test('23_es2021-1: Logical assignment operators (&&=, ||=, ??=)', () => {
  // Utilitza els operadors d'assignació lògica (&&=, ||=, ??=) per modificar les variables a, b i c.
  let a = true
  let b = false
  let c = null

  // Resol aquí...
  a &&= 'assigned'
  b ||= 'default'
  c ??= 'fallback'

  expect(a).toBe('assigned')
  expect(b).toBe('default')
  expect(c).toBe('fallback')
})

test('23_es2021-2: Numeric separators improve readability', () => {
  // Declara un número gran utilitzant separadors numèrics per millorar la llegibilitat.
  const largeNumber = 1_000_000 

  expect(largeNumber).toBe(1000000)
})

test('23_es2021-3: Promise.any returns the first resolved promise', async () => {
  // Utilitza Promise.any per obtenir la primera promesa resolta.
  const promises = [
    Promise.reject('Error'),
    Promise.resolve('First resolved'),
    Promise.resolve('Second resolved'),
  ]

  const result = await Promise.any(promises)

  expect(result).toBe('First resolved')
})