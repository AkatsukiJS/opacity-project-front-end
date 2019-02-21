/* @flow */

export const capitalize = (str: string): string =>
  str.charAt(0).toUpperCase() + str.slice(1)

export const toNum = (str: string): number =>
  Number(str.replace(/[^0-9.]/g, ''))

export default {
  capitalize,
  toNum
}
