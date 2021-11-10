import './style.css'

document.querySelector('#app').innerHTML = `
  <h1 id="h1" prevent-deleting>Hi there! Try to deleting this H1 tag using your devtools!</h1>
`

const h1 = document.getElementById('h1')
const opts = {
  childList: true,
  attributes: true,
  subtree: true,
  attributeOldValue: true,
  characterData: true,
  characterDataOldValue: true,
}

const observer = new MutationObserver(callback)
observer.observe(document.getElementById('app'), opts)

function callback(records) {
  const record = records[0]
  if (record.type === 'childList' && record.removedNodes.length > 0) {
    const removeNodesLists = Array.from(record.removedNodes)
    if (removeNodesLists.includes(h1)) {
      reset(() => {
        document.querySelector('#app').innerHTML = `
          <h1 id="h1" prevent-deleting>Dont remove me! Plz...🥺</h1>
        `
      })
    }
  }
}

function reset(express = () => {}) {
  setTimeout(() => {
    observer.disconnect()
    express()
    observer.observe(h1, opts)
  })
}
