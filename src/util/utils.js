
import jsBeautify from 'js-beautify'
import domToImage from 'dom-to-image'
import fileSaver from 'file-saver'

export function body (func) {
  return func.toString().match(/function[^{]+\{([\s\S]*)\}$/)[1]
}

export function beautify (str) {
  return jsBeautify(str)
}

export function executeFunction (code) {
  try {
    // eslint-disable-next-line
    new Function(code).call(this)
    return true
  } catch (e) {
    console.error(e)
    return e
  }
}

export function download (selector, filename) {
  let node = window.document.querySelector(selector)
  domToImage.toBlob(node).then(function (blob) {
    fileSaver.saveAs(blob, filename)
  }).catch((e) => alert(e))
}

export default {body, beautify, executeFunction, download}
