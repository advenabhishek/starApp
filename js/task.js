class Task {
    constructor(taskList) {
        console.log({ taskList })
        // this.id = new Date().getTime() + 
        this.id = Math.floor(10000000000 + Math.random() * 90000000000)
        this.status = false
        let div = document.createElement('div')
        div.className = 'task-item'
        div.id = 'task-item-' + this.id
        div.innerHTML = `
            <span>
                task-item-${this.id}
            </span>
            <span>
                <button id='delete-button-${this.id}'>
                    Delete
                </button>
            </span>
        `
        this.DOM = div
        taskList.DOM.append(div)
        this.removeTask(taskList.removeTask);
    }

    removeTask(removeTask) {
        if (this.status == false)
            document.getElementById('delete-button-' + this.id).addEventListener('click', () => {
                removeTask(this)
            })
    }
}