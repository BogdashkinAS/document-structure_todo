const taskInput = document.getElementById('task__input')
const taskList = document.getElementById('tasks__list')
const tasksAdd = document.getElementById('tasks__add')

function removeElement() {
  const taskRemove = Array.from(document.querySelectorAll('.task__remove'))
  taskRemove.forEach((task) => {
    task.addEventListener('click', (event) => {
      event.preventDefault()
      const activeEl = task.closest('.task')
      activeEl.remove()
    })
})
}

function inputElement() {
  tasksAdd.addEventListener('click', (event) => {
    let text = taskInput.value.trim()
    if (text.length != 0) {
      let htmlCode = `
      <div class="task">
        <div class="task__title">
          ${text}
        </div>
        <a href="#" class="task__remove">&times;</a>
      </div>
      `
      taskList.insertAdjacentHTML('afterEnd', htmlCode)
      taskInput.value = ''
    } else {
        console.log('Строка не может быть пустой!')
    }
    removeElement()
    event.preventDefault()
  })
}

inputElement()