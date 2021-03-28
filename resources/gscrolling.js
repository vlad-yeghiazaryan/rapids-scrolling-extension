const timeOut = 750
const targetElement = 'a'
const colorToIgnore = 'colorToIgnore'

function scrollToText () {
  let links = document.querySelector('div.ii.gt > div.a3s.aiL').querySelectorAll(targetElement)
  links = Array.from(links)
  const notDarklinks = links.filter(
    link => String(document.defaultView.getComputedStyle(link, null).color) !== colorToIgnore)
  notDarklinks[0].scrollIntoView()
}

function readyAndScroll () {
  setTimeout(scrollToText, timeOut)
}

function keyDownTextField (e) {
  const nextPageCSS = 'div.T-I.J-J5-Ji.adg.T-I-awG.T-I-ax7.T-I-Js-Gs'
  const nextPage = document.querySelector(nextPageCSS)
  if (e.key.toLowerCase() === 'n') {
    nextPage.click()
    readyAndScroll()
  }
}
export default keyDownTextField
