import { Controller } from "@hotwired/stimulus"
// import { post } from "@rails/request.js"

export default class extends Controller {
  static targets = [ "line-item" ]

  #draggedElement
  #nearestElement
  #dropzoneElement = document.getElementById('dropzone')

  dragStart(event) {
    event.target.style.opacity = 0.4

    // set draggedElement
    this.#draggedElement = event.target
    event.dataTransfer.setData('text/plain', event.target.dataset.draggableId)
    event.dataTransfer.setData("text/html", event.target.innerHTML)

    event.dataTransfer.dropEffect = "move"
  }

  dragEnd(event) {
    console.log("DRAG END")
    console.log("Dragged Element:", this.draggedElement)

    event.target.style.opacity = 1
    this.#dropzoneElement.classList.add("hidden")
  }

  dragEnter(event) {
    console.log("DRAG ENTER")
    event.target.style.color = "red"

    this.#repositionDropzone(event)
  }

  dragLeave(event) {
    console.log("DRAG LEAVE")

    this.#repositionDropzone(event)
  }

  dragOver(event) {
    console.log("DRAG OVER")

    if (event.preventDefault) {
      event.preventDefault();
    }
    return false
  }

  drop(event) {
    console.log("DROP")
    const draggedItemId = event.dataTransfer.getData('text/plain')
    const draggedItemHtml = event.dataTransfer.getData('text/html')
    console.log("draggedItemId:", draggedItemId)
    console.log("draggedItemHtml:", draggedItemHtml)
  }

  #repositionDropzone(event) {
    const nearestElement = event.target.closest('[data-target="line-item"]')
    const targetRect = nearestElement.getBoundingClientRect()

    this.#dropzoneElement.classList.remove("hidden")

    if (event.clientY < targetRect.top) {
      nearestElement.insertAdjacentElement('beforebegin', this.#dropzoneElement)
    } else {
      nearestElement.insertAdjacentElement('afterend', this.#dropzoneElement)
    }
  }
}
