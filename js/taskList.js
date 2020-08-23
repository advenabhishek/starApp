class TaskList {
    constructor() {
        this.DOM = document.getElementById('task-list')
        this.taskList = []
        this.subscribers = []
    }

    addTask = () => {
        this.taskList.push(new Task(this))
    }

    removeTask = (task) => {
        this.taskList = this.taskList.filter(item => {
            return item.id != task.id
        })
        task.DOM.remove()
    }
}
