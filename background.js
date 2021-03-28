// defaults
const defaults = {
  timeOut: 1500,
  targetElement: 'a',
  colorsToIgnore: ['rgb(0, 0, 0)', 'rgb(255,255,255)'],
  colorsToTarget: ['rgb(17, 85, 204)', 'rgb(10, 33, 43)']
}

chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.sync.set({ defaults })
  chrome.storage.sync.get('defaults', ({ defaults }) => {
    console.log('defaults:', defaults)
  })
})
