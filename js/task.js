class Task {
    constructor(taskList) {
        console.log({taskList})
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

    start(server) {
        console.log(this, server)
        if (server.status == false) {
            console.log(`starting task ${this.id} on server ${server.id}`)
            console.log('DOM:::::',this.DOM)
            this.DOM.classList.add("active");
            this.status = true
            server.status = true
            server.startedAt = new Date().getTime()
            // remove the delete button
            document.getElementById('delete-button-' + this.id).style.display = 'none'
            setTimeout(() => {
                this.status = 'completed'
                server.status = false
                server.startedAt = null
                //should we remove the task after completion? Not clear.
            }, 20000)
            return true
        }
        console.log(`could not start ${this.id} on server ${server.id} as the server was busy`)
        return false
    }
}