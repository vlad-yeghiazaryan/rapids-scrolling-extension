// Importing main function
function scrollToText (targetElement, colorsToTarget, colorsToIgnore) {
  let links = document.querySelector('div.ii.gt > div.a3s.aiL').querySelectorAll(targetElement)
  links = Array.from(links)
  const notDarklinks = links.filter(
    link => {
      const color = String(document.defaultView.getComputedStyle(link, null).color).replace(/\s/g, '')
      const toInclude = colorsToTarget.map(c => c.replace(/\s/g, '')).includes(color)
      const toIgnore = colorsToIgnore.map(c => c.replace(/\s/g, '')).includes(color)
      return toInclude && !toIgnore
    })
  if (notDarklinks.length !== 0) {
    notDarklinks[0].scrollIntoView()
  }
}

function readyAndScroll (defaults) {
  const timeOut = defaults.timeOut
  const targetElement = defaults.targetElement
  const colorsToTarget = defaults.colorsToTarget
  const colorsToIgnore = defaults.colorsToIgnore
  const inner = () => {
    scrollToText(targetElement, colorsToTarget, colorsToIgnore)
  }
  setTimeout(inner, timeOut)
}

function keyDownTextField (e) {
  const nextPageCSS = 'div.T-I.J-J5-Ji.adg.T-I-awG.T-I-ax7.T-I-Js-Gs'
  const nextPage = document.querySelector(nextPageCSS)
  if (e.key.toLowerCase() === 'n') {
    nextPage.click()
    chrome.storage.sync.get('defaults', ({ defaults }) => {
      readyAndScroll(defaults)
    })
  }
}
document.addEventListener('keydown', keyDownTextField, false)
