function preloader_count() {
  let counterElement = document.querySelector('.preloader-counter')
  let currentValue = 0

  function updateCounter() {
    if (currentValue === 100) {
      return
    }
    currentValue += Math.floor(Math.random() * 10)
    if (currentValue > 100) {
      currentValue = 100
    }
    counterElement.textContent = currentValue

    let delay = Math.floor(Math.random() * 200) + 50
    setTimeout(updateCounter, delay)
  }
  updateCounter()
}

export default preloader_count
