export default defineBackground(() => {
  const id = browser.runtime.id
  console.log('Hello there background!', { id })
})
