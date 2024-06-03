export default defineContentScript({
  matches: ['*://*.example.com/*'],
  runAt: 'document_idle',
  main () {
    const parent = document.querySelector('div')
    if (parent) {
      const child = document.createElement('p')
      child.innerText = String(Date.now() + 1)
      parent.appendChild(child)
    }
  }
})
