const taskInput = document.getElementById('task__input')
const taskList = document.getElementById('tasks__list')

function removeElement() {
  const taskRemove = Array.from(document.querySelectorAll('.task__remove'))
  console.log(taskRemove)
  taskRemove.forEach((task) => {
    task.addEventListener('click', (event) => {
      event.preventDefault()
      const activeEl = task.closest('.task')
      activeEl.remove()
    })
})
}

function inputElement() {
  taskInput.addEventListener('keyup', (event) => {
    event.preventDefault()
    if (event.code == 'Enter' || event.code == 'NumpadEnter') {
        if (taskInput.value != '') {
            let text = taskInput.value
            console.log(text, event.code)
            taskList.innerHTML += `
            <div class="task">
              <div class="task__title">
                ${text}
              </div>
              <a href="#" class="task__remove">&times;</a>
            </div>
            `
        taskInput.value = ''
        }
    }
    removeElement()
})
}

inputElement()