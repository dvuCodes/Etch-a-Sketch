"use strict"
const mainContainerEl = document.getElementById("main-container")
const changeGridBtnEl = document.getElementById("change-grid-btn")
const gridSizeDisplayEl = document.getElementById("grid-size-display")
const gridInputEl = document.getElementById("grid-input")

// Trigger creation of grid on DOM content loaded
window.addEventListener("DOMContentLoaded", (e) => {
  createGrids()
  onLoad()
})

changeGridBtnEl.addEventListener("click", (e) => {
  e.preventDefault()
  createGrids(gridInputEl.value)
  onLoad()
})

function createGrids(num) {
  const numberOfPixels = num || 16

  //   calculate width and height of cells
  let pixelWidth = 40 / numberOfPixels + "rem"
  let pixelHeight = 40 / numberOfPixels + "rem"

  //   Refence the main grid container
  const gridEl = document.getElementById("grid")

  // clear grid to allow a fresh grid and not additional
  gridEl.innerHTML = ""

  //   intiate array
  let divArray = []

  //   here we create a nested for loop for the basic grid structure of 16 x 16. For each div element we inject grid cells.
  for (let i = 0; i < numberOfPixels; i++) {
    // for each div created loop through and create nested divs
    divArray[i] = document.createElement("div")

    gridEl.appendChild(divArray[i])

    for (let j = 0; j < numberOfPixels; j++) {
      // iterate through loop creating divs
      const newDiv = document.createElement("div")
      // refernce a class attribute to create
      const classAttribute = document.createAttribute("class")
      classAttribute.value = "grid-cells"

      // set the attribute of the newDiv to the assigned class attribute
      newDiv.setAttributeNode(classAttribute)

      // reference a width and height attribute for the divs
      const widthHeightAttribute = document.createAttribute("style")
      widthHeightAttribute.value = `width: ${pixelWidth}; height:${pixelHeight}`
      newDiv.setAttributeNode(widthHeightAttribute)

      // Add the new element to the DOM
      divArray[i].appendChild(newDiv)
    }
  }
}

function onLoad() {
  const gridPixels = document.querySelectorAll("grid-cells")
  gridPixels.forEach((grid) =>
    grid.addEventListener("mouseenter", (e) => e.target.classList.add("hover"))
  )
}
